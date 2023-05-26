import { Alert, AlertIcon, Box, Button, Flex, Table, Tbody, Td, Th, Thead, Tr,} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {AiFillDelete} from "react-icons/ai"
import { Offerimage } from "./AddOffer";
import {  offerData, offerDataDelete } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";

const Offer = () => {
  const dispatch=useDispatch()
  const nav=useNavigate()

  const us=useSelector((store)=>store.AppReducer.offerDa)
  useEffect(()=>{
  dispatch(offerData)
  },[])

  const handleDelete = (_id) => {
    dispatch(offerDataDelete(_id)).then((res) => {
      if (res.type === "DELETE_OFFERIMAGE_SUCCESS") {
        dispatch(offerData);
      } else {
        alert("somthing wrong")
      }
    });
  };

  

  return (
    <Box>
        <Flex color={"Black"} fontWeight={"bold"} w="100%" bgColor={"gray.100"} display="flex" justifyContent={"end"}  mb="3px" >
        <Offerimage/>

        </Flex>
    <Flex justifyContent="center" alignItems="center">
        
      <Box overflowX="auto" w={{ base: "100%", md: "100%", xl: "100%" }} border="3px solid black" borderRadius="15px">
        <Table  size="md" variant="simple">
          <Thead bgColor="teal.100">
            <Tr>
              <Th w="50%" color={"Black"} fontWeight={"bold"}>IMAGE Id</Th>
              <Th color={"Black"} fontWeight={"bold"}>DELETE</Th>
            </Tr>
          </Thead>
          <Tbody bgColor="gray.100">
            {us && us.map((e) => (
              <Tr key={e._id} border="2px solid black">
                <Box as="Td" color={"Black"} textAlign={"left"} fontWeight={"bold"} w="80%" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">{e._id}</Box>
                  <Td>
                  <Button  colorScheme="red" size="sm" onClick={() => handleDelete(e._id)}>
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

export default Offer;
