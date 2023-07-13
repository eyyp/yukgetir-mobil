import { takeLatest } from "redux-saga/effects";
import * as types from '../actions/types'
import defaultSaga from "./default";

export default function* sagas() {
    yield takeLatest(types.GET_DEFAULT,defaultSaga)
}