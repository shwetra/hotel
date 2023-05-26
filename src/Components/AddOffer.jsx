import {
    Flex,
    Box,
    FormControl,
    Input,
    Stack,
    Button,
    Heading,
    ModalContent,
    ModalBody,
    Modal,
    useDisclosure,
    ModalOverlay,
    ModalCloseButton,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react"
  import {AiFillFileAdd} from "react-icons/ai"
  import {FcAddImage} from "react-icons/fc"
import { addOffer, offerData } from "../Redux/AppReducer/action";
import { useDispatch } from "react-redux";
  
  export const Offerimage = () => {
    const dispatch=useDispatch()
    const [formData,setformDate]=useState({});
  
    const handleChange=(e)=>{
      const {value,name}=e.target;
      setformDate({
        ...formData,
        [name]:value,
      });
    };
  
    const handlsubmiturl = async () => {
      const payload = formData;
    dispatch(addOffer(payload)).then((res) => {
    dispatch(offerData)
    }).catch((err) => {
      console.log(err);
    })
    };


  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} bgColor="transparent">{<AiFillFileAdd/>} Offer Image</Button>
      <Modal   isOpen={isOpen} onClose={onClose} bgColor="transparent" >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
          <Flex
            minH={"auto"}
            align={"center"}
            justify={"center"}
            bg="transparent"
          >
            <Stack spacing={8} mx={"auto"} maxW={"500px"} py={12} px={6}>
              <Box rounded={"lg"} boxShadow={"lg"} p={8} bgColor={"gray.100"} border="2px solid black">
                
                <Stack spacing={4}>
                    
                  <Stack align={"center"} >
                  <Heading>{<FcAddImage/>}</Heading>
                  </Stack>
                  <FormControl id="URL" isRequired>
                    <Input
                      fontSize={"md"}
                      border="2px solid black"
                      name="url"
                      onChange={handleChange}
                      type="url"
                      placeholder="URL LINK"
                    />
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button
                      onClick={handlsubmiturl}
                      loadingText="Submitting"
                      size="lg"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                    {<FcAddImage/>}Add
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
       
          </ModalBody>

         
            <Button colorScheme='blue' onClick={onClose}>
              CLOSE
            </Button>
        </ModalContent>
      </Modal>
    </>
  )
}