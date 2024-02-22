import { Button } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa"

export const DogsCard = ({ _id, name, breed, age, location, price, DeleteDogsData }) => {
  return (
    <div>
      <div key={_id} style={{ marginTop: "10px", padding: "20px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
        <p style={{ fontWeight: "bold", fontSize: "25px" }}> <span style={{ fontWeight: "bold" }}>Name :- </span> {name}</p>
        <p> <span style={{ fontWeight: "bold" }}>Age :- </span> {age}</p>
        <p> <span style={{ fontWeight: "bold" }}>Breed :- </span> {breed}</p>
        <p> <span style={{ fontWeight: "bold" }}>Location :- </span> {location}</p>
        <p> <span style={{ fontWeight: "bold" }}>Price :- </span> {price}</p>
        <Button mt="25px" colorScheme="red" onClick={() => DeleteDogsData(_id)}> <FaTrash /> </Button>
      </div>
    </div>
  );
};

