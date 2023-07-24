import { call, put, takeLatest, delay } from "redux-saga/effects";
import actions from "../actions";
import services from "../services";
import {LOGIN, LOGOUT} from "../constants/auth";

const {
    user: {pending, setAuth}
} = actions;

export default function* watchAuth() {
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(LOGOUT, logoutSaga);
}

function* loginSaga({payload}) {
    try {
        yield put(pending());
        yield delay(2000);
        yield put(setAuth(payload));
    } catch (error) {
        console.error(error);
    }
}

function* logoutSaga() {
    try {
        yield put(pending());
        yield delay(1000);
        yield put(setAuth(null));
    } catch (error) {
        console.error(error);
    }
}