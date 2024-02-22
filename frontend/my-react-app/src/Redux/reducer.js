import { GET_PETS_FAILURE, GET_PETS_REQUEST, GET_PETS_SUCCESS } from "./action-types"

const initialState = {
    pets: [],
    isLoading: false,
    isError: false,
    theme: 'light',
    isLoggedIn: false,
    user: {},
    cart: [],
    cartprice: 0,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PETS_REQUEST:
            return { ...state, isLoading: true, pets: [], isError: false };
        case GET_PETS_SUCCESS:
            return { ...state, isLoading: false, pets: action.payload, isError: false };
        case GET_PETS_FAILURE:
            return { ...state, isLoading: false, pets: [], isError: true }
        default:
            return state
    }
}