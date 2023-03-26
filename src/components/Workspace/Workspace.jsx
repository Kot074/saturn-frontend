import React from "react";
import Welcome from "./Welcome/Welcome";
import {Route, Routes} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import EditContainer from "./Users/Edit/EditContainer";

const Workspace = () => {
    return (
        <Routes>
            <Route path='/' element={<Welcome />}  />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/users/edit' element={<EditContainer />} />
        </Routes>
    )
}

export default Workspace;