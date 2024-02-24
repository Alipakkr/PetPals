import axios from 'axios';
import { GET_PETS_FAILURE, GET_PETS_REQUEST, GET_PETS_SUCCESS, GET_SINGLE_PET_FAILURE, GET_SINGLE_PET_REQUEST, GET_SINGLE_PET_SUCCESS } from "./action-types";

export const fetchPets = () => {
    return async (dispatch) => {
        console.log("fetching pets....");
        dispatch({ type: GET_PETS_REQUEST });
        try {
            let data = await axios.get('https://petpals-2z52.onrender.com/pets/get');
            console.log(data.data);
            dispatch({ type: GET_PETS_SUCCESS, payload: data.data.pets })
        } catch (error) {
            console.log(error);
            dispatch({ type: GET_PETS_FAILURE })
        }
    };
};


export const GetSingleData = (petid)=>{
    return async(dispatch)=>{
        console.log(`getting single pet with id ${petid}`);
        dispatch({type:GET_SINGLE_PET_REQUEST});
        try {
            let data = (await axios.get(`https://petpals-2z52.onrender.com/pets/get/${petid}`)).data;
            dispatch({type:GET_SINGLE_PET_SUCCESS,payload:data.data});
        } catch (error) {
            console.log(error);
            dispatch({type:GET_SINGLE_PET_FAILURE})
        }
    }
}