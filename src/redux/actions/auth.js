import {PENDING, LOGIN, SET_AUTH} from "../constants/auth";

export const pending = () => ({
    type: PENDING,
})

export const login = (user) => ({
    type: LOGIN,
    payload: user
});

export const setAuth = (user) => ({
    type: SET_AUTH,
    payload: user,
});
