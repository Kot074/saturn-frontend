import React from "react";
import styles from './Workspace.module.css';
import Welcome from "./Welcome/Welcome";
import Users from "./Users/Users";
import {Route, Routes} from "react-router-dom";

const Workspace = (props) => {
    return (
        <Routes>
            <Route path='/' element={<Welcome />}  />
            <Route path='/users' element={<Users data={props.data.users} />} />
        </Routes>
    )
}

export default Workspace;