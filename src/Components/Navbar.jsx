import { useState } from "react";
import {
  Box,
  Flex,
  Button,
  HStack,
  IconButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon,AddIcon} from "@chakra-ui/icons";
import { FaSun, FaMoon } from "react-icons/fa";


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const { colorMode, toggleColorMode } = useColorMode();

  const toggleButtonDisplay = () => {
    setIsLargeScreen(window.innerWidth > 768);
  };

  window.addEventListener("resize", toggleButtonDisplay);

  return (
    <Box bg={"#FFD700"} px={4} p="-10px">
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Box w="130px">
          <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4JGrBPJbUImqrxyzq9pBHGyGXbuEWGJMVnA&usqp=CAU" alt="Logo" />
        </Box>
        <Flex >
        <Box display="flex" mr="30px" mt={{lg:"5px"}}>
        {isLargeScreen ? (
          <HStack spacing={8} alignItems={"start"}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              Action
            </Button>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              Action
            </Button><Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              Action
            </Button>
          </HStack>
        ) : (
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        )}
       </Box>
       <Box>
        <IconButton
          size={"md"}
          aria-label={"Toggle dark mode"}
          icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
        />
         </Box>
         </Flex>
      </Flex>

      {isOpen && !isLargeScreen && (
        <Box pb={4}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>Button 1</Box>
            <Box>Button 2</Box>
            <Box>Button 3</Box>
          </HStack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
