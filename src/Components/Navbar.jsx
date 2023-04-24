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
import { HamburgerIcon, CloseIcon,AddIcon,EmailIcon} from "@chakra-ui/icons";
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
    <Box bg={"blue.100"} px={4} p="-10px" pos="fixed" top="0" left="0" right="0" zIndex="sticky" boxShadow="sm">
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Box w="110px">
          <img  src="https://user-images.githubusercontent.com/104376252/234013874-02cfdafe-fdea-4877-8b39-801d542a93c4.png" alt="Logo" />
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
            </Button>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<EmailIcon />}>
              Send Query
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
            </Button>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<EmailIcon />}>
              Send Query
            </Button>
          </HStack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
