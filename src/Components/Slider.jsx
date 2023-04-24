import React from "react";
import { useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";

const Slider = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);
  const nextImage = () => {
    if (counter === craouselData.length - 1) {
      setCounter(-1);
    }setCounter((prev) => prev + 1);
  };
  const prevImage = () => {
    if (counter === 0) {
      setCounter(4);
    }setCounter((prev) => prev - 1);
  };

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
        <Box position="relative" h={{base:"300px",md:"500px",lg:"650px"}}>
          <Image
            boxSize={"100%"}
            objectFit="fill"
            src={craouselData[counter].img}
            alt=""
            width={"100%"}
            className="darken"
          />
        </Box>

  );
};

export default Slider;
const craouselData = [
    {
        img:"https://user-images.githubusercontent.com/104376252/233923319-b45e38ea-fb8e-445e-982e-5e3cac0651f8.jpg"
      },
      {
        img:"https://user-images.githubusercontent.com/104376252/233923775-ef24c4bb-8d00-4179-a511-841a8cd5fb78.jpg"
      },{
        img:"https://user-images.githubusercontent.com/104376252/233924007-f48f096d-3b58-4fbc-97d5-92c490504477.jpg"
      },{
        img:"https://user-images.githubusercontent.com/104376252/233925271-764a7470-b63f-402f-8cd7-c56b4357a0f6.png"
      },{
        img:"https://user-images.githubusercontent.com/104376252/233925271-764a7470-b63f-402f-8cd7-c56b4357a0f6.png"
      },{
        img:"https://user-images.githubusercontent.com/104376252/233926064-78175029-38c3-414d-a196-0353be6bc43a.png"
      },{
        img:"https://user-images.githubusercontent.com/104376252/233926546-a5b59919-c901-4633-8957-ffea36f6038a.png"
      },{
        img:"https://user-images.githubusercontent.com/104376252/233927582-50dc35c0-2571-4e31-9c75-30d1dbe5debd.png"
      }  
];
