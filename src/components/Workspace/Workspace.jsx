import React from "react";
import Welcome from "./Welcome/Welcome";
import Users from "./Users/Users";
import {Route, Routes} from "react-router-dom";
import Edit from "./Users/Edit/Edit";

const Workspace = (props) => {
    return (
        <Routes>
            <Route path='/' element={<Welcome />}  />
            <Route path='/users' element={<Users data={props.data.users} dispatch={props.dispatch} />} />
            <Route path='/users/edit' element={<Edit users={props.data.users.data} currentUser={props.data.editingUser} dispatch={props.dispatch}/>} />
        </Routes>
    )
}

export default Workspace;