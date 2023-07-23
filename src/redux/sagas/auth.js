import { call, put, takeLatest, delay } from "redux-saga/effects";
import actions from "../actions";
import { LOGIN } from "../constants/auth";
import services from "../services";

const {
    user: {pending, setAuth}
} = actions;

export default function* watchAuth() {
    yield takeLatest(LOGIN, loginSaga);
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