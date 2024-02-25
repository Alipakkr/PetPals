import React, { useContext, useEffect, useState } from 'react'
import { Flex,Box,  Input, Button, useToast, Text, Image } from "@chakra-ui/react"
import axios from "axios"
// import { adminContext } from '../context/AdminAuthContext'
import { Navigate, useNavigate } from 'react-router-dom';
export const AdminLogin = () => {
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const toast = useToast()
  const navigate=useNavigate()
  
  let handleSubmit = (e)=>{
    e.preventDefault()
    let obj = {
      email:email,
      password:password
    }

    axios.post("https://petpals-2z52.onrender.com/admin/login", obj)
    .then((res)=>{
      if(res.status===200){
        // adminLoginFunc()
        toast({
          title: 'Successfully Logged In',
          description: 'Welcome Admin',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        navigate("/adminHome")
      }
    })
    .catch((err)=>{
      toast({
        title: 'An error occurred.',
        description: 'Unable to create user account.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })

    })
  }
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Flex w="60%" mb="40px" mt="80px" justifyContent={"center"} gap="20px" boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"} padding={"20px"}>

        <Box w="45%"  mt="120px">
        <h1 style={{fontWeight:"bold", fontSize:"24px"}}>Admin Login</h1>
        <label style={{marginTop:"20px"}}>Email</label>
        <Input placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)} />
        <br />
        <label style={{marginTop:"20px"}}>Password</label>
        <Input placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)} />
        <br />
        <Button mt="20px" colorScheme='red' onClick={handleSubmit} >Submit</Button>
        </Box>
        <Box >
          <Image src="https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"/>
        </Box>
      </Flex>
    </Box>
  )
}
