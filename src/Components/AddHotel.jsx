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
import { HotelData, addHotel, offerData } from "../Redux/AppReducer/action";
import { useDispatch } from "react-redux";
  
  export const AddHotel = () => {
    const dispatch=useDispatch()
    const [formData,setformDate]=useState({});
  
    const handleChange=(e)=>{
      const {value,name}=e.target;
      setformDate({
        ...formData,
        [name]:value,
      });
    };
  
    const handlsubmiturl = async (e) => {
        e.preventDefault();
        // console.log(formData)
        const payload = formData;
    dispatch(addHotel(payload))
      .then((res) => {
        dispatch(HotelData);
      })
      .catch((err) => {
        console.log(err);
      });
    };
    

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} bgColor="transparent">{<AiFillFileAdd/>} ADD Hotel </Button>

      <Modal   isOpen={isOpen} onClose={onClose} bgColor="transparent"  >
        <ModalOverlay />
        <ModalContent maxW={"40%"}>
          <ModalCloseButton />
          <ModalBody >
          <Flex
            minH={"auto"}
            align={"center"}
            justify={"center"}
            bg="transparent"
          >
            <Stack spacing={8} mx={"auto"}  py={12} >
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
                  <FormControl id="URL1" isRequired>
                    <Input
                      fontSize={"md"}
                      border="2px solid black"
                      name="urlf"
                      onChange={handleChange}
                      type="url"
                      placeholder="Interior1"
                    />
                  </FormControl>
                  <FormControl id="URL2" isRequired>
                    <Input
                      fontSize={"md"}
                      border="2px solid black"
                      name="urls"
                      onChange={handleChange}
                      type="url"
                      placeholder="Interior2"
                    />
                  </FormControl>
                  <FormControl id="URL3" isRequired>
                    <Input
                      fontSize={"md"}
                      border="2px solid black"
                      name="urlt"
                      onChange={handleChange}
                      type="url"
                      placeholder="Interior3"
                    />
                  </FormControl>
                  <FormControl id="URL4" isRequired>
                    <Input
                      fontSize={"md"}
                      border="2px solid black"
                      name="urll"
                      onChange={handleChange}
                      type="url"
                      placeholder="Interior4"
                    />
                  </FormControl>

                  <FormControl id="Name" isRequired>
                    <Input
                      fontSize={"md"}
                      border="2px solid black"
                      name="Name"
                      onChange={handleChange}
                      type="url"
                      placeholder="Hotel Name"
                    />
                  </FormControl>

                  <FormControl id="State" isRequired>
                    <Input
                      fontSize={"md"}
                      border="2px solid black"
                      name="State"
                      onChange={handleChange}
                      type="string"
                      placeholder="State"
                    />
                  </FormControl>

                  <FormControl id="Location" isRequired>
                    <Input
                      fontSize={"md"}
                      border="2px solid black"
                      name="Location"
                      onChange={handleChange}
                      type="string"
                      placeholder="Location"
                    />
                  </FormControl>
                  
                  <FormControl id="features" isRequired>
                    <Input
                      fontSize={"md"}
                      border="2px solid black"
                      name="Features"
                      onChange={handleChange}
                      type="string"
                      placeholder="Features"
                    />
                  </FormControl>

                  <FormControl id="Other" isRequired>
                    <Input
                      fontSize={"md"}
                      border="2px solid black"
                      name="ExtraDetails"
                      onChange={handleChange}
                      type="string"
                      placeholder="Extra Details"
                    />
                  </FormControl>

                  <FormControl id="Other" isRequired>
                    <Input
                      fontSize={"md"}
                      border="2px solid black"
                      name="Other"
                      onChange={handleChange}
                      type="string"
                      placeholder="Other Details"
                    />
                  </FormControl>

                  <FormControl id="Price" isRequired>
                    <Input
                      fontSize={"md"}
                      border="2px solid black"
                      name="Price"
                      onChange={handleChange}
                      type="Number"
                      placeholder="Price"
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
                    {<FcAddImage/>}Hotel
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