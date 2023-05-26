import { useState } from "react";
import { Box, Image, Text, SimpleGrid, Heading, Flex } from "@chakra-ui/react";
import { Button } from "react-scroll";
import { Link } from "react-router-dom";

function Card() {
  const [isHovered, setIsHovered] = useState(false);
  let CountryData = [
    {
      title: "Taj Mahal",
      image:
        "https://user-images.githubusercontent.com/104376252/235465489-e28d517e-7b71-48ff-be07-7b477aa4a59c.jpg",
    },
    {
      title: "Gatway Of India",
      image:
        "https://user-images.githubusercontent.com/104376252/235466806-8bd8eedb-2b82-4fde-a3c9-96f5ac25f50d.jpg",
    },
    {
      title: "India Gate",
      image:
        "https://user-images.githubusercontent.com/104376252/235465858-1605c0e0-21df-4bb3-863f-6cfaa014bcc1.jpg",
    },
    {
      title: "Akshardham",
      image:
        "https://user-images.githubusercontent.com/104376252/235465097-73967f11-e85c-413d-82ae-8dae808b17e6.jpg",
    },
    {
      title: "Lal kila",
      image:
        "https://user-images.githubusercontent.com/104376252/235466271-91ac38de-172b-4cbb-a157-c296a66504a0.jpg",
    },
    {
      title: "Lotus Temple",
      image:
        "https://user-images.githubusercontent.com/104376252/235467199-3d0b8c7e-3a16-4a18-8f33-2b95ab36c53a.jpg",
    },
    {
      title: "Qutub Minar",
      image:
        "https://user-images.githubusercontent.com/104376252/235467728-3ffc6ac2-d34d-4586-849c-9ab26b416986.jpg",
    },
    {
      title: "Golden Tample",
      image:
        "https://user-images.githubusercontent.com/104376252/235468511-5e9ab0bb-6c67-4142-84a1-f6912cb705f2.jpg",
    },
  ];
  let Data = [
    {
      title: "Hawa Mahal",
      image:
        "https://user-images.githubusercontent.com/104376252/235463801-28f11278-c824-45af-a4a7-6a0121c99c1d.jpg",
    },
    {
      title: "Goa",
      image:
        "https://user-images.githubusercontent.com/104376252/235469806-c06bdde2-20ae-49c3-b187-d02d8a56b87f.jpg",
    },
    {
      title: "Kasmir",
      image:
        "https://user-images.githubusercontent.com/104376252/235470587-62a3921d-7bf2-4ce1-98d4-9f6179e8d6f7.jpg",
    },
    {
      title: "Manali",
      image:
        "https://user-images.githubusercontent.com/104376252/235471852-0271ed84-745b-4f09-981d-026217eacfbb.jpg",
    },
  ];
  return (
    <>
      <Box mt="10px"  >
        <Heading textDecoration="underline" ml="20px" align="start">Destinations</Heading>
      </Box>

      <Flex
        flexDirection={{ base: "column", md: "row", lg: "row" }}
      >
        <Box/>
        <Box objectFit="cover" w={{md:"100%",md:"40%",lg:"29%" }}  mt={{base:"25px",md:"2.6%",lg:"1.7%"}}  mr="1%">
        <Image  borderRadius="13px" m={{base:"auto"}} h="100%" src="https://user-images.githubusercontent.com/104376252/235472511-e26e300d-4576-453e-a879-aae638bb3fd3.jpg" alt="hh" />
        </Box>



        <Box w={{base:"100%",md:"100%",lg:"75%"}}>
          <SimpleGrid
            columns={[2, 3, 4]}
            spacing={4}
        mt={6}
            w={{ base: "100%",md:"100%", lg: "100%" }}
          >
            {CountryData &&
              CountryData.map((t) => {
                return (
                  <Link to="/placedetail">
                    <Box
                      key={t.title}
                      position="relative"
                      onMouseEnter={() => setIsHovered(t.title)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <Image
                        src={t.image}
                        borderRadius="13px"
                        alt="Placeholder image"
                        h={{ base: "130px",md:"130px", lg: "200px" }}
                        w="100%"
                        objectFit="cover"
                        opacity={!isHovered || isHovered !== t.title ? 1 : 0.8}
                        transition="opacity 0.3s ease-in-out"
                      />

                      {isHovered === t.title && (
                        <Box
                          position="absolute"
                          top="50%"
                          left="50%"
                          transform="translate(-50%, -50%)"
                          bg="rgba(0, 0, 0, 0.5)"
                          alignItems="center"
                          justifyContent="center"
                          h="100%"
                          w="100%"
                          pt="30%"
                        >
                          <Text color="white" fontWeight="bold" fontSize="2xl">
                            {t.title}
                          </Text>
                        </Box>
                      )}
                    </Box>
                  </Link>
                );
              })}
          </SimpleGrid>
        </Box>
      </Flex>
      <SimpleGrid
            columns={[2, 4, 4]}
            spacing={4}
        mt={6}
            w={{ base: "100%",md:"100%", lg: "100%" }}
          >
            {Data &&
              Data.map((t) => {
                return (
                  <Link to="/placedetail">
                    <Box
                      key={t.title}
                      position="relative"
                      onMouseEnter={() => setIsHovered(t.title)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <Image
                        src={t.image}
                        borderRadius="13px"
                        alt="Placeholder image"
                        h={{ base: "130px",md:"130px", lg: "200px" }}
                        w="100%"
                        objectFit="cover"
                        opacity={!isHovered || isHovered !== t.title ? 1 : 0.8}
                        transition="opacity 0.3s ease-in-out"
                      />

                      {isHovered === t.title && (
                        <Box
                          position="absolute"
                          top="50%"
                          left="50%"
                          transform="translate(-50%, -50%)"
                          bg="rgba(0, 0, 0, 0.5)"
                          alignItems="center"
                          justifyContent="center"
                          h="100%"
                          w="100%"
                          pt="30%"
                        >
                          <Text color="white" fontWeight="bold" fontSize="2xl">
                            {t.title}
                          </Text>
                         
                        </Box>
                      )}
                    </Box>
                  </Link>
                );
              })}
          </SimpleGrid>
    </>
  );
}

export default Card;
