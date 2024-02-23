import axios from 'axios';
import { GET_PETS_FAILURE, GET_PETS_REQUEST, GET_PETS_SUCCESS } from "./action-types";

export const fetchPets = () => {
    return async (dispatch) => {
        console.log("fetching pets....");
        dispatch({ type: GET_PETS_REQUEST });
        try {
            let data = await axios.get('https://petpals-2z52.onrender.com/pets/get');
            console.log(data.data.pets);
            dispatch({ type: GET_PETS_SUCCESS, payload: data.data.pets })
        } catch (error) {
            console.log(error);
            dispatch({ type: GET_PETS_FAILURE })
        }
    };
};
