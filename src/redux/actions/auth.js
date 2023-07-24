import {PENDING, LOGIN, SET_AUTH, LOGOUT} from "../constants/auth";

export const pending = () => ({
    type: PENDING,
})

export const login = (user) => ({
    type: LOGIN,
    payload: user
});

export const logout = () => ({
    type: LOGOUT,
})

export const setAuth = (user) => ({
    type: SET_AUTH,
    payload: user,
});
