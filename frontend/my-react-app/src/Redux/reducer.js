import { GET_PETS_FAILURE, GET_PETS_REQUEST, GET_PETS_SUCCESS, GET_SINGLE_PET_FAILURE, GET_SINGLE_PET_REQUEST, GET_SINGLE_PET_SUCCESS, GET_USER_DATA, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, get_USER_SUCCESS } from "./action-types"

const initialState = {
    pets: [],
    isLoading: false,
    isError: false,
    theme: 'light',
    isLoggedIn: false,
    user: {},
    pet: {}
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PETS_REQUEST:
            // console.log("switch");
            return { ...state, isLoading: true, pets: [], isError: false };
        case GET_PETS_SUCCESS:
            // console.log(action.payload);
            return { ...state, isLoading: false, pets: action.payload, isError: false };
        case GET_PETS_FAILURE:
            return { ...state, isLoading: false, pets: [], isError: true }
        case LOGIN_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, user: action.payload, isError: false, isLoggedIn: true };
        case LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true, isLoggedIn: false };
        case GET_SINGLE_PET_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case GET_SINGLE_PET_SUCCESS:
            return { ...state, isLoading: false, pet: action.payload, isError: false };
        case GET_SINGLE_PET_FAILURE:
            return { ...state, isError: true, pet: {}, isLoading: false }
        case GET_USER_DATA:
            return { ...state, isError: false};
        case get_USER_SUCCESS:
            return {...state,isError:false,user:action.payload}
        case LOGOUT_REQUEST:
            return {...state,isError:false,isLoading:true};
        case LOGOUT_SUCCESS:
            return {...state,isError:false,isLoading:false,user:{},isLoggedIn:false};
        case LOGOUT_FAILURE:
            return {...state,isError:true}
        default:
            return state
    }
}