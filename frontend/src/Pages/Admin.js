import { Box, Button, Icon, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
export const Admin = () => {
  const [user,setUser] = useState([]);

  const getAllUser =()=>{
    axios.get("http://localhost:4500/user")
    .then((res)=>setUser(res.data.user))
    .catch((err)=>console.log("err",err));
  }
useEffect(()=>{
  getAllUser();
},[])
console.log("user",user)
  return (
  <Box>
  <h2>All Uers Data</h2>
<Table>
  <Thead>
    <Tr>
      <Th>Name</Th>
      <Th>Last Name</Th>
      <Th>email</Th>
      <Th>Role</Th>
      <Th>Delete</Th>
    </Tr>
  </Thead>
  <Tbody>
    {user.map((e,index)=>(
    <Tr key={index}>
      <Td>{e.firstName}</Td>
      <Td>{e.lastName}</Td>
      <Td>{e.email}</Td>
      <Td>{e.role}</Td>
     <Td> <DeleteIcon/></Td>
    </Tr>
    ))}

  </Tbody>
</Table>
  </Box>
  )
}
