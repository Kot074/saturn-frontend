import {combineReducers, legacy_createStore as createStore} from "redux";
import userEditReducer from "./userEditReducer";
import usersPageReducer from "./usersPageReducer";

let reducers = combineReducers({
    editingUser: userEditReducer,
    users: usersPageReducer,
})


let store = createStore(reducers);

export default store;