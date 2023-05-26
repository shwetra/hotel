import React, { useEffect, useState } from 'react';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { offerData } from '../Redux/AppReducer/action';

export const Offershow = () => {
  const dispatch=useDispatch()
    const [counter, setCounter] = useState(0);
    const offerData = [
        // {
        //     img: 'https://img.freepik.com/premium-photo/illustration-special-offer-yellow-background_235490-350.jpg?w=2000',
        // }, {
        //     img: 'https://img.freepik.com/premium-photo/illustration-special-offer-yellow-background_235490-350.jpg?w=2000',
        // },{
        //     img: 'https://img.freepik.com/premium-photo/illustration-special-offer-yellow-background_235490-350.jpg?w=2000',
        // }
    ];

    // const us=useSelector((store)=>store.AppReducer.offerDa)
    // useEffect(()=>{
    // dispatch(offerData)
    // },[])
   

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter === offerData.length - 1) {
                setCounter(-1);
            }
            setCounter((prev) => prev + 1);
        }, 2000);
        return () => {
            clearInterval(interval);
        };
    });

    if (offerData.length === 0) {
        return null;
    }

    return (
        <Box>
            <Box position="relative" h={{ base: "300px", md: "400px", lg: "350px" }}>
                <Image
                    boxSize={"100%"}
                    m="auto"
                    objectFit="fill"
                    src={offerData[counter].img}
                    alt="no image"
                    width={{base:"100%",lg:"70%"}}
                    className="darken"
                />
            </Box>
        </Box>
    );
};
