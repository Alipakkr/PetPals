import { GET_PETS_FAILURE, GET_PETS_REQUEST, GET_PETS_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./action-types"

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
            console.log("switch");
            return { ...state, isLoading: true, pets: [], isError: false };
        case GET_PETS_SUCCESS:
            const petsWithImages = action.payload.pets.map(pet => ({
                ...pet,
                image: {
                    ...pet.image,
                    url: `data:${pet.image.contentType};base64,${Buffer.from(pet.image.data.data).toString('base64')}`
                }
            }));
            return { ...state, isLoading: false, pets: petsWithImages, isError: false };

        case GET_PETS_FAILURE:
            return { ...state, isLoading: false, pets: [], isError: true }
        case LOGIN_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, user: action.payload, isError: false };
        case LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true }
        default:
            return state
    }
}