import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

const Dummy = () => {
  const { state } = useLocation();
  const { hotelData } = state;

  return (
    <Box m="auto" mt="70px" w="95%" align="start">
         <Heading ml="20px"  >{hotelData.Name}</Heading>
         <Text ml="20px" mb="20px" fontSize="22px" >{hotelData.State}</Text>
     <Flex flexDirection={{ base: "column", md: "row", lg: "row" }}>
                <Box  w={{base:"100%",lg:"50%"}}>
               <Image w={{base:"100%",md:"95%",lg:"95%"}} h={{base:"",md:"",lg:"470px"}} src={hotelData.url} alt="" srcset="" />
               </Box>
               <Box  w={{base:"100%",lg:"50%"}} mt={{base:"20px",md:"0px"}} >
                <Flex gap="10px">
                <Image h={{base:"105px",md:"130px",lg:"230px"}} w="50%" objectFit="cover" src={hotelData.urlf} alt="" srcset="" />
                <Image h={{base:"105px",md:"130px",lg:"230px"}} w="50%" objectFit="cover" src={hotelData.urls} alt="" srcset="" />
                </Flex>

                <Flex gap="10px" mt="10px">
                <Image h={{base:"105px",md:"120px",lg:"230px"}} w="50%" objectFit="cover" src={hotelData.urlt} alt="image"/>
                <Image h={{base:"105px",md:"120px",lg:"230px"}} w="50%" objectFit="cover" src={hotelData.urll} alt="image"/>
                </Flex>
              
                </Box>
                </Flex>
                <Text fontWeight="600" align="justify">{hotelData.Location}</Text>
                <Text fontWeight="500" align="justify" mt="10px">{hotelData.Features}</Text>
    </Box>
  );
}

export default Dummy;
