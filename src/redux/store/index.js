import {
    createStore,
    applyMiddleware
} from "redux";
import {
    composeWithDevTools
} from 'redux-devtools-extension';
import sagaMiddleware from "redux-saga";
import reducer from "../reducer/index"
import mysaga from "../saga/index"
const saga = sagaMiddleware();

const initializeStore = () => {
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(saga)));
    saga.run(mysaga);
    return store;
}

export default initializeStore();