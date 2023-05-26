// import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
// import { Link } from 'react-router-dom';
// import React, { useEffect } from 'react'
// import Hoteldetailpage from './Hoteldetailpage';
// import { useDispatch, useSelector } from 'react-redux';
// import { HotelData } from '../Redux/AppReducer/action';

// export const Hoteldetail = () => {
//   const dispatch=useDispatch()


//   const Data=useSelector((store)=>store.AppReducer.hotel)
//   useEffect(()=>{
//   dispatch(HotelData)
//   },[])

//   return (
//     <Box   mt="70px"> 
//     <Heading>ALL HOTELS</Heading>
//     <Box border="2px solid black" borderColor="goldenrod" mb="20px"></Box>
//     <SimpleGrid
//     m="auto"
//       w={{base:"100%",md:"100%",lg:"100%"}}
//       columns={[1, 2, 4]}
//       spacing={4}
//     >
//       {Data.map((e) => {
//         return (
//             <Card m="auto" w={{base:"90%",md:"190px",lg:"90%"}} h="300px">
//               <Image
//                 src={e.url}
//                 h="65%"  
//                 objectFit="cover"           
//                 alt='image is loading'
//                 borderRadius='lg'
//               />
//               <Stack h="100px"  align={"center"}>
//               <Heading  mt="15px" fontSize="18px">{e.Name}</Heading>
//                 <Heading  mt="15px" size='sm'>{e.State}</Heading>
               
//               </Stack>
             
//               {/* <Hoteldetailpage image={e.url} id={e._id} Extra={e.ExtraDetails} Features={e.Features} Location={e.Location} Name={e.Name} Other={e.Other} Price={e.Price} State={e.State} /> */}
//               </Card>
//         )
//       })}
//     </SimpleGrid>
//     </Box>
//   )
// }


import { Box, Card,  Heading, Image, SimpleGrid, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HotelData } from '../Redux/AppReducer/action';

export const Hoteldetail = () => {
  const dispatch=useDispatch()

  const Data=useSelector((store)=>store.AppReducer.hotel)
  useEffect(()=>{
    dispatch(HotelData)
  },[])

  return (
    <Box mt="70px"> 
      <Heading>ALL HOTELS</Heading>
      <Box border="2px solid black" borderColor="goldenrod" mb="20px"></Box>
      <SimpleGrid
        m="auto"
        w={{base:"100%",md:"100%",lg:"100%"}}
        columns={[1, 2, 4]}
        spacing={4}
      >
        {Data.map((e) => {
          return (
            <Link to="/hoteldetail" key={e.id} state={{ hotelData: e }}>
              <Card  m="auto" w={{base:"90%",md:"180px",lg:"90%"}} h="300px">
                <Image
                  src={e.url}
                  h="65%"  
                  objectFit="cover"           
                  alt='image is loading'
                  borderRadius='lg'
                />
                <Stack h="100px"  align={"center"}>
                  <Heading  mt="15px" fontSize="18px">{e.Name}</Heading>
                  <Heading  mt="15px" size='sm'>{e.State}</Heading>
                </Stack>
              </Card>
            </Link>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}
