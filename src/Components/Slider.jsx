import React from "react";
import { useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import Card from "./CityCard"
import { Offershow } from "./Offershow";
import About from "./About";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { sliderData } from "../Redux/AppReducer/action";
import Why from "./Whywithus";
import GuaranteeSection from "./Whywithus";

const Slider = () => {
  const [counter, setCounter] = useState(0);

  const dispatch=useDispatch()
  const Data=useSelector((store)=>store.AppReducer.slider)
   useEffect(()=>{
   dispatch(sliderData)
   },[])
  const craouselData = [
    {
        url:"https://user-images.githubusercontent.com/104376252/233923319-b45e38ea-fb8e-445e-982e-5e3cac0651f8.jpg"
      },
      {
        url:"https://user-images.githubusercontent.com/104376252/233923775-ef24c4bb-8d00-4179-a511-841a8cd5fb78.jpg"
      },{
        url:"https://user-images.githubusercontent.com/104376252/233924007-f48f096d-3b58-4fbc-97d5-92c490504477.jpg"
      },{
        url:"https://user-images.githubusercontent.com/104376252/233925271-764a7470-b63f-402f-8cd7-c56b4357a0f6.png"
      },{
        url:"https://user-images.githubusercontent.com/104376252/233925271-764a7470-b63f-402f-8cd7-c56b4357a0f6.png"
      } 
];
craouselData.push(...Data)

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === craouselData.length - 1) {
        setCounter(-1);
      }setCounter((prev) => prev + 1);
    },3000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Box>
        <Box position="relative" h={{base:"300px",md:"500px",lg:"650px"}}>
          <Image
            boxSize={"100%"}
            objectFit="fill"
            src={craouselData[counter].url}
            alt=""
            width={"100%"}
            className="darken"
          />
        </Box>
        <Card/>
        <Offershow/>
        <GuaranteeSection/>
        <About/>
        <Footer/>
        </Box>
  );
};

export default Slider;
