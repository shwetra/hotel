import { Box, SimpleGrid, Icon, Heading, Flex } from "@chakra-ui/react";
import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { RiTimeFill } from "react-icons/ri";

import {VscWorkspaceTrusted}from "react-icons/vsc"
const GuaranteeData = [
  {
    title: "GUARANTEED BEST PRICE",
    description:
      "Unlike many other travel agency companies, we do not act as a middleman. We guarantee that the price you get from us is the lowest for other travel companies.",
    icon: VscWorkspaceTrusted,
  },
  {
    title: "FULL FINANCIAL PROTECTION",
    description:
      "Your money is completely safe with us in our bank with a return policy to give you peace of mind",
    icon: FcMoneyTransfer,
  },
  {
    title: "24/7 ANYTIME ANYWHERE SERVICES",
    description:
      "We ensure the extreme level of service delivered to the guest, from before you to travel to after you return home.",
    icon: RiTimeFill,
  },
];

const GuaranteeSection = () => {
  return (
    <Box>
    <Box py="10">
        <Flex mb="25px" ml="9%">
        <Heading align="start"  textDecoration="underline" textDecorationColor="#116264">Why us</Heading>
        </Flex>
      <SimpleGrid
        columns={[1, 2, 3]}
        spacing="40px"
        textAlign="center"
        mx="auto"
        maxW="1200px"
      >
        {GuaranteeData.map((item) => (
          <Box key={item.title} >
            <Icon as={item.icon}  fontSize="5xl" mb="2" />
            <Box mb="6">
              <Box fontWeight="bold" fontSize="lg" mb="2">
                {item.title}
              </Box>
              <Box>{item.description}</Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
    <Box w="80%" bgColor="#116264" p={{base:"5",lg:"20"}}  m="auto" borderRadius="30px">
      <Box as="h2" fontSize={{base:"22px",lg:"30px"}} textAlign={"justify"} color="white" fontWeight="bold" mb={4}>
        You can depend on us for quality service with no compromise
      </Box>
      <Box fontSize="lg" textAlign={"justify"} color="white">
        As Destination is committed to keeping you safe and secure by following strict health &amp; safety protocols as per WHO and is constantly audited by world’s leading inspection, verification, testing and health and safety management systems.
      </Box>
    </Box>
    </Box>
  );
};

export default GuaranteeSection;
