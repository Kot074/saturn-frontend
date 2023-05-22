import React from "react";
import Welcome from "./Welcome/Welcome";
import {Route, Routes} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import Edit from "./Users/Edit/Edit";

const Workspace = () => {
    return (
        <Routes>
            <Route path='/' element={<Welcome />}  />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/users/edit/:userId?' element={<Edit />} />
        </Routes>
    )
}

export default Workspace;