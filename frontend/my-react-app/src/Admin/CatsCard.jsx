import { Button } from '@chakra-ui/react'
import React from 'react'
import { FaTrash } from "react-icons/fa"
export const CatsCard = ({_id,cat_name,breed,age,location,adoption_fee,DeleteCatsData}) => {
  return (
    <div>
     <div key={_id} style={{  marginTop: "10px", padding:"20px", boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <p> <span style={{fontWeight:"bold"}}>Name :- </span> {cat_name}</p>
          <p> <span style={{fontWeight:"bold"}}>Breed :- </span> {breed}</p>
          <p> <span style={{fontWeight:"bold"}}>Age :- </span> {age}</p>
          <p> <span style={{fontWeight:"bold"}}>Location :- </span> {location}</p>
          <p> <span style={{fontWeight:"bold"}}>Price :- </span> {adoption_fee}</p>
          <Button mt="15px" colorScheme="red" onClick={()=>DeleteCatsData(_id)}> <FaTrash/> </Button>
        </div>
    </div>
  )
}
