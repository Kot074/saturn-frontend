import {combineReducers, legacy_createStore as createStore} from "redux";
import usersPageReducer from "./usersPageReducer";

let reducers = combineReducers({
    users: usersPageReducer,
})


let store = createStore(reducers);

export default store;