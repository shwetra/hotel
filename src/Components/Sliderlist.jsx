import { Box, Button, Flex, Table, Tbody, Td, Th, Thead, Tr,} from "@chakra-ui/react";
import { useEffect } from "react";
import {Slimage} from "./AddSliderimage";
import {AiFillDelete} from "react-icons/ai"
import { getsliderDelete, sliderData } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";

const Sliderlist = () => {
 const dispatch=useDispatch()
 const Data=useSelector((store)=>store.AppReducer.slider)
  useEffect(()=>{
  dispatch(sliderData)
  },[])

  const handleDelete = (_id) => {
    dispatch(getsliderDelete(_id)).then((res) => {
      if (res.type == "DELETE_SLIDERIMAGE_SUCCESS") {
        dispatch(sliderData);
      } else {
        alert("somthing wrong please try after later")
      }
    });
  };

  

  return (
    <Box>
        <Flex w="100 %" bgColor={"gray.100"} color={"Black"}
              fontWeight={"bold"} display="flex" justifyContent={"end"}  mb="3px" >
        <Slimage/>

        </Flex>
    <Flex justifyContent="center" alignItems="center">
        
      <Box overflowX="auto" w={{ base: "100%", md: "100%", xl: "100%" }} border="3px solid black" borderRadius="15px">
        <Table size="md" variant="simple">
          <Thead bgColor="teal.100">
            <Tr>
              <Th color={"Black"}
              fontWeight={"bold"}>IMAGE URL</Th>
              <Th color={"Black"}
              fontWeight={"bold"}>DELETE</Th>
            </Tr>
          </Thead>
          <Tbody bgColor="gray.100">
            {Data && Data.map((user) => (
              <Tr key={user._id} border="2px solid black">
                <Td color={"Black"}
              fontWeight={"bold"}  overflow={"hidden"}>{user.url}</Td>
                  <Td>
                  <Button color={"Black"}
              fontWeight={"bold"} colorScheme="red" size="sm" onClick={() => handleDelete(user._id)}>
                    {<AiFillDelete/>}
                  </Button>
                  </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
    </Box>
  );
};

export default Sliderlist;
