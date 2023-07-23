import {PENDING, SET_AUTH} from "../constants/auth";

const initialState = {
    loading: true,
    data: null,
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case PENDING:
            return {
                ...state,
                loading: true,
            }
        case SET_AUTH:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default auth;
