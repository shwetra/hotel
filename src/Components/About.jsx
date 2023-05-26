import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const About = () => {
  return (
    <Box py={8}  p="20px" >
      <VStack spacing={4} w={{base:"90%",md:"80%",lg:"70%"}} m="auto" >
        <Heading  size="lg">About Us</Heading>
        <Text fontWeight="600"  fontSize="md" textAlign="justify">
        At [Your Travel Company Name], we are passionate about providing unforgettable travel experiences to our customers. Our mission is to help you discover the world in a way that is authentic, immersive, and sustainable.
        </Text>
        <Text fontWeight="600"  fontSize="md" textAlign="justify">
        Whether you're looking to book a hotel for your next business trip, a romantic getaway, or an adventure-packed vacation, we've got you covered. We partner with top hotels around the world to offer you the best selection of accommodations at the best prices. 
        </Text>
        <Text fontWeight="600"   fontSize="md" textAlign="justify">
        Our travel experts are always available to assist you with any questions you may have or to help you plan your dream vacation. From booking flights and hotels to arranging tours and activities, we take care of every detail so you can focus on making memories that will last a lifetime.
        </Text>
        <Text fontWeight="600" fontSize="md" textAlign="justify">
        Thank you for choosing [Your Travel Company Name] for your travel needs. We look forward to helping you explore the world! 
        </Text>
      </VStack>
    </Box>
  );
}

export default About;
