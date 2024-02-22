import { Box,Button, Text } from '@chakra-ui/react'
import React from 'react'

export const PostCard = ({pet_breed,pet_age,pet_image,pet_location,pet_name,pet_price,userID,userName,user_location,_id,handleReject,status,handleApprove}) => {
  return (
    <div>

        <Box padding={"20px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>
        <div>
        <h1 style={{fontSize:"20px", fontWeight:"bold", marginBottom:"10px"}}>Pets Information</h1>
        <h2>{pet_name}</h2>
        <p> <span style={{fontWeight:"bold"}}>Breed :-</span> {pet_breed}</p>
        <p> <span style={{fontWeight:"bold"}}>Age:-</span> {pet_age} years</p>
        <p> <span style={{fontWeight:"bold"}}>Location:-</span> {pet_location}</p>
        <p><span style={{fontWeight:"bold"}}>Price :-</span>free</p>
      </div>
        <br />
      <div>
        <h3 style={{fontSize:"20px", fontWeight:"bold", marginBottom:"10px"}}>User Information</h3>
        <p> <span style={{fontWeight:"bold"}}>User Name :-</span>  {userName}</p>
        <p> <span style={{fontWeight:"bold"}}>User Location :-</span>  {user_location}</p>
        <Text color={`${status ? "green" : "red"}`} fontWeight={"bold"} fontSize={"24px"}> <span style={{fontWeight:"bold"}}>Status :-</span> {status ? "Approved" : "Pending"}</Text>
      </div>
        <Box display={"flex"} gap="20px" justifyContent={"center"}>
        <Button mt="9px" colorScheme="green" onClick={()=>handleApprove(_id)}>Approve</Button>
        <Button mt="9px" colorScheme="red" onClick={()=>handleReject(_id)}>Reject</Button>
        </Box>
        </Box>

    </div>
  )
}
