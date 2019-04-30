import {
    put,
    delay,
    takeEvery
} from "redux-saga/effects"

function* worker(action) {
    try {
        // async task 
        yield delay(1000);

        yield put({
            type: "ADD_NOTE",
            payload: action.payload
        });

    } catch (e) {
        yield put({
            type: "ADD_NOTE",
            payload: "some thing went wrong"
        });
    }

}

function* watcher() {
    yield takeEvery("ADD", worker)
}

export default watcher;