import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {FiGift ,FiUsers } from "react-icons/fi";
import {FaHotel, FaPlaceOfWorship} from "react-icons/fa"
import {TfiLayoutSlider} from "react-icons/tfi"
import UserList from "./AllUser";
import Sliderlist from "./Sliderlist";
import Offer from "./Offer";
import HotelList from "./HotelList";

const AllUser = () => {
  return <Text>All User Component</Text>;
};

const PostCity = () => {
  return <Text>Post City Component</Text>;
};

const PostSlider = () => {
  return <Text>Post Slider Component</Text>;
};

const PostOffer = () => {
  return <Text>Post Offer Component</Text>;
};

export const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("AllUser");

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };


  return (
    <Flex h="100vh" mt="63px">
      <Box bg="gray.100" w={{base:"20%",lg:"15%"}}>
         
          {/* Button with random icon for large screens */}
          <Box w="0%">
            <Button
              leftIcon={<FiUsers/>}
              color={"Black"}
              fontWeight={"bold"}
              variant="ghost"
              onClick={() => handleComponentChange("AllUser")}
            >
             Users
            </Button>
            <Button
              leftIcon={<TfiLayoutSlider/>}
              color={"Black"}
              fontWeight={"bold"}
              variant="ghost"
              onClick={() => handleComponentChange("PostSlider")}
            >
            Slider
            </Button>
            <Button
              leftIcon={<FiGift/>}
              color={"Black"}
              fontWeight={"bold"}
              variant="ghost"
              onClick={() => handleComponentChange("PostOffer")}
            >
              Offer
            </Button>
            <Button
              leftIcon={<FaHotel/>}
              color={"Black"}
              fontWeight={"bold"}
              variant="ghost"
              onClick={() => handleComponentChange("HotelList")}
            >
              Hotel
            </Button>
          </Box>
      </Box>
      <Box w="80%">
        {/* Conditionally render active component */}
        {activeComponent === "AllUser" && <UserList />}
        {activeComponent === "PostSlider" && <Sliderlist />}
        {activeComponent === "PostOffer" && <Offer />}
        {activeComponent === "HotelList" && <HotelList />}
      </Box>
    </Flex>
  );
};

// export default Sidebar;
