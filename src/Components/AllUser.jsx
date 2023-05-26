import { Box, Button, Flex, Heading, Table, Tbody, Td, Th, Thead, Tr,} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import {AiOutlineDelete} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userData, userDataDelete } from "../Redux/AppReducer/action";

const UserList = () => {
  const dispatch=useDispatch()
  const nav=useNavigate()
const user=useSelector((store)=>store.AppReducer.userData)
useEffect(()=>{
dispatch(userData)
},[])

  const handleDelete = (_id) => {
   dispatch(userDataDelete(_id)).then((res)=>{
if(res.type=="DELETE_USERDATA_SUCCESS"){
  dispatch(userData)
  alert("User Delete sussesfull")
} }).catch((err)=>{
    alert("something went wrong")
   }) 
  };

  
  return (
    <>
    <Flex justifyContent="center" alignItems="center">
      <Box overflowX="auto" w={{ base: "100%", md: "80%", xl: "90%" }} border="3px solid black" borderRadius="15px">
        <Table size="md" variant="simple">
          <Thead bgColor="teal.100" w="100%">
            <Tr>
              <Th color={"Black"} fontWeight={"bold"}>EMAIL</Th>
              {/* <Th color={"Black"} fontWeight={"bold"}>Role</Th> */}
              <Th color={"Black"} fontWeight={"bold"}>DELETE</Th>    
            </Tr>
          </Thead>
          <Tbody bgColor="yellow.100">
            {user && user.map((u) => (
              <Tr key={u._id} border="2px solid black">
                <Td color={"Black"} fontWeight={"bold"}>{u.username}</Td>
                {/* <Td color={"Black"} fontWeight={"bold"}>{} </Td> */}
                  <Td><Button colorScheme="red" leftIcon={<AiOutlineDelete/>} size="sm" onClick={() => handleDelete(u._id)}>
                    Delete
                  </Button> </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
    </>
  );
};

export default UserList;
