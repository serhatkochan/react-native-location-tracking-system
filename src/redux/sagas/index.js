import { all, fork } from 'redux-saga/effects';

import watchAuth from "./auth";

export default function* RootSaga() {
    yield all([
        fork(watchAuth)
    ]);
}