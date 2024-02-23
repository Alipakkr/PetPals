import { useDispatch } from "react-redux"
import { GET_PETS_FAILURE, GET_PETS_REQUEST, GET_PETS_SUCCESS } from "./action-types"
import axios from 'axios';
export const fetchPets = (dispatch)=>{
    dispatch({type:GET_PETS_REQUEST});
    axios.get('http://localhost:4500/pets/get')
    .then((res)=>{
        console.log("pets",res.data);
        return dispatch({type:GET_PETS_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        console.log(err);
        return dispatch({type:GET_PETS_FAILURE})
    })
}