import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Text,
    useColorModeValue,
    Image,
    Textarea,
    Heading,
    ModalContent,
    ModalHeader,
    ModalBody,
    Modal,
    useDisclosure,
    ModalOverlay,
    ModalCloseButton,
    ModalFooter,
  } from "@chakra-ui/react";
  import React, { useState } from "react"
  import { useDispatch } from "react-redux";
  import { useNavigate } from "react-router-dom";
  import { userAuthentication } from '../Redux/Auth/action';
 
  
  export const Login = () => {
    const dispatch = useDispatch();
    const [formData,setformDate]=useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const nav = useNavigate();
  
    const handleChange=(e)=>{
      const {value,name}=e.target;
      setformDate({
        ...formData,
        [name]:value,
      });
    };
  
const handlecreate = async () => {
    const res = await dispatch(userAuthentication(formData));
    if(res.type==="USER_LOGIN_SUCCESS"){
    console.log(res);
    nav("/")
    }
 
};


  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} h="30px" w="40px" bgColor="teal">Login</Button>

      <Modal  isOpen={isOpen} onClose={onClose} bgColor="transparent">
        <ModalOverlay />
        <ModalContent w="400px" bgColor={"gray.100"}>
          
          <ModalBody >
       
      
          <Flex
            minH={"auto"}
            align={"center"}
            justify={"center"}
            // bg="transparent"
            bgColor={"blackAlpha.600"}
          >
            <Stack spacing={8} mx={"auto"} maxW={"lg"}>
              <Box rounded={"lg"} boxShadow={"lg"} p={8} >
                <Stack spacing={4}>
                  <Stack align={"center"} >
                  <Heading fontSize={"20PX"}>Login</Heading>
                  </Stack>
                  <FormControl id="email" isRequired>
                    <Input
                      fontSize={"md"}
                      name="username"
                      onChange={handleChange}
                      type="email"
                      placeholder="Email"
                    />
                  </FormControl>
                  <FormControl id="name" isRequired>
                    <Input
                      fontSize={"md"}
                      name="password"
                      onChange={handleChange}
                      type="password"
                      placeholder="Password"
                    />
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button
                      onClick={handlecreate}
                      loadingText="Submitting"
                      size="lg"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Login
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
       
          </ModalBody>

          
        </ModalContent>
      </Modal>
    </>
  )
}