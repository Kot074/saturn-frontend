import React from "react";
import styles from './Workspace.module.css';
import Welcome from "./Welcome/Welcome";
import Users from "./Users/Users";
import {Route, Routes} from "react-router-dom";
import Edit from "./Users/Edit/Edit";

const Workspace = (props) => {
    return (
        <Routes>
            <Route path='/' element={<Welcome />}  />
            <Route path='/users' element={<Users data={props.data.users} />} />
            <Route path='/users/edit' element={<Edit />} />
        </Routes>
    )
}

export default Workspace;