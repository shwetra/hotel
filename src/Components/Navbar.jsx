import React, { useState, useEffect } from "react";
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
import { HamburgerIcon, CloseIcon, EmailIcon } from "@chakra-ui/icons";
import { FaSun, FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Login } from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { userSignout } from '../Redux/Auth/action';

const Navbar = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isAuth, isAdmin } = useSelector((store) => store.AuthReducer);
  const [isLoggedIn, setIsLoggedIn] = useState(isAuth);
  const [Admin, setIsAdmin] = useState(isAdmin);

  const toggleButtonDisplay = () => {
    setIsLargeScreen(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", toggleButtonDisplay);
    setIsLoggedIn(isAuth); // Update isLoggedIn state
    setIsAdmin(isAdmin); // Update isAdmin state
    return () => {
      window.removeEventListener("resize", toggleButtonDisplay);
    };
  }, [isAuth, isAdmin]);

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('token');
  
    dispatch(userSignout());
    setIsLoggedIn(false); // Update isLoggedIn state to false
    setIsAdmin(false); // Update isAdmin state to false
    nav("/");
  };

  const handleDashboard = () => {
    if (Admin) {
      nav("/admin/@/@/dashboard");
    }
  };
const handleContact=(()=>{
  nav("/contact")
})

  return (
    <Box
      bg={"blue.100"}
      px={4}
      p="-10px"
      pos="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="sticky"
      boxShadow="sm"
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Box w="110px">
          <img
            src="https://user-images.githubusercontent.com/104376252/234013874-02cfdafe-fdea-4877-8b39-801d542a93c4.png"
            alt="Logo"
          />
        </Box>
        <Flex>
          <Box display="flex" mr="30px" mt={{ lg: "5px" }}>
            {isLargeScreen ? (
              <HStack spacing={8} alignItems={"start"}>
                {isLoggedIn ? (
                  <>
                    <Button
                      variant={"solid"}
                      colorScheme={"teal"}
                      size={"sm"}
                      onClick={handleContact}
                      mr={4}
                      leftIcon={<EmailIcon />}
                    >
                      Send Query
                    </Button>
                    {Admin && (
                      <Button
                        variant={"solid"}
                        colorScheme={"teal"}
                        size={"sm"}
                        mr={4}
                        onClick={handleDashboard}
                      >
                        Dashboard
                      </Button>
                    )}
                    <Button
                      variant={"solid"}
                      colorScheme={"teal"}
                      size={"sm"}
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
                    <Login />
                  </Button>
                )}
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
            {isLoggedIn ? (
              <>
                <Button
                  variant={"solid"}
                  colorScheme={"teal"}
                  size={"sm"}
                  mr={4}
                  onClick={handleContact}
                  leftIcon={<EmailIcon />}
                >
                  Send Query
                </Button>
                {Admin && (
                  <Button
                    variant={"solid"}
                    colorScheme={"teal"}
                    size={"sm"}
                    mr={4}
                    onClick={handleDashboard}
                  >
                    Dashboard
                  </Button>
                )}
                <Button
                  variant={"solid"}
                  colorScheme={"teal"}
                  size={"sm"}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
                <Login />
              </Button>
            )}
          </HStack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
