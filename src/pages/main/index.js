import {useEffect} from "react";
import { useSelector } from 'react-redux';

import Tabs from "../../../src/pages/main/tabs";
import Login from "../../../src/pages/login";

import {dispatch, actions, selectors} from "../../../src/redux";

const {
    user: {login}
} = actions;
const {
    auth: {selectAuthLoading, selectCurrentUser}
} = selectors;
const Main = () => {
    const auth = useSelector(selectCurrentUser);

    useEffect(() => {
        // dispatch({username: 'Serhat', password: '123456'})
    }, []);

    return (
        <>
            {auth ? <Tabs /> : <Login />}
        </>
    );
};
export default Main;