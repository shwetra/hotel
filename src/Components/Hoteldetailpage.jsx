import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
    Box,
    Image,
    Flex,
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
  
  export default function Hoteldetailpage({image,id  , Extra, Features, Location,Name,Other, Price,State}) {
    const nav=useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleQuery=()=>{
      nav("/contact")
    }
    return (
      <>
        <Button bgColor="gray" color="black" cursor="pointer" onClick={onOpen}>View</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxW={{base:"100%",lg:"70%"}}>
            <ModalHeader>Hotel Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDirection={{ base: "column", md: "row", lg: "row" }}>
                <Box  w={{base:"100%",lg:"50%"}}>
               <Image w="90%" src={image} alt="" srcset="" />
               </Box>
               <Box  w={{base:"100%",lg:"50%"}}>
                <Text>
                  <span style={{ fontWeight: "bold" }}>{Name}</span>
                </Text>
                <Text fontWeight="600" align="justify">{Location}</Text>
                <Text fontWeight="500" align="justify" mt="10px">{Features}</Text>
                </Box>
                </Flex>
                <Text  align="justify" mt="10px" fontWeight="500">{Extra}</Text>
                <Text align="justify" fontWeight="500"  mt="10px">{Other}</Text>
                <Text color="gold" fontSize="30px" fontWeight="700">₹{Price}/Day</Text>
                
             
            </ModalBody>
  
            <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleQuery}>
                Send Query
              </Button>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  