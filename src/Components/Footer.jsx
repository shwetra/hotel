import { Box, Container, Flex, Link, Text } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box 
    // backgroundImage='url("https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg")'
    // backgroundSize='cover'
    >
      <Container maxW='container.xl' py='6'>
        <Flex flexWrap='wrap' justifyContent='space-between' alignItems='center'>
          <Box w={['100%', '50%']} >
            <Text fontSize='3xl' fontWeight='bold' mb='4'>
              Travel With Us
            </Text>
            <Text fontSize='lg' mb='4' fontWeight='bold' textAlign="justify">
            At As-Destination, we are passionate about providing unforgettable travel experiences to our customers. Our mission is to help you discover the world in a way that is authentic, immersive, and sustainable.
            </Text>
            <Flex>
              <Link href='#'>
                <FaFacebook size={24} />
              </Link>
              <Link href='#' mx='4'>
                <FaTwitter size={24} />
              </Link>
              <Link href='#'>
                <FaInstagram size={24} />
              </Link>
              <Link href='#' mx='4'>
                <FaYoutube size={24} />
              </Link>
            </Flex>
          </Box>
          <Box w={['100%', '40%']} mt={['8', '0']}>
            <Text fontSize='3xl' fontWeight='bold' mb='4'>
              Quick Links
            </Text>
            <Flex flexWrap='wrap' justifyContent={['space-between', 'flex-start']}>
              <Link href='/' mr={['0', '8']} mb={['4', '0']}>
                Home
              </Link>
              <Link href='/placedetail' mr={['0', '8']} mb={['4', '0']}>
                Tours
              </Link>
              <Link href='/placedetail' mr={['0', '8']} mb={['4', '0']}>
                Hotels
              </Link>
              <Link href='#' mr={['0', '8']} mb={['4', '0']}>
                About
              </Link>
              <Link href='/contact' mr={['0', '8']} mb={['4', '0']}>
                Contact
              </Link>
            </Flex>
          </Box>
        </Flex>
        <Text mt='8' textAlign='center'>
          © {new Date().getFullYear()} Travel With Us. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
