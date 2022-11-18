import { Box, Input } from '@chakra-ui/react'
import React from 'react'

export const Register = () => {
  return (
    <Box>Register
    <form>
        <Input type="text" placeholder='Enter Your First Name'/>
        <Input type="text" placeholder='Enter Your Last Name'/>
     <Input type="email" placeholder="Enter Your Email"/>
<select>
    <option>Admin</option>
    <option>Content Writer</option>
</select>
<Input type="passowrd" placeholder='Enter Your password should be grater than 8 charactars'/>
    </form>
    </Box>
  )
}
