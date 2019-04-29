import {
    createStore
} from "redux";
import {
    devToolsEnhancer
} from 'redux-devtools-extension';
import reducer from "../reducer/index"
export default createStore(reducer, devToolsEnhancer());