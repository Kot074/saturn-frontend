import './App.css';
import WelcomeContainer from "../Welcome/WelcomeContainer";
import Login from "../Login/Login";
import {Route, Routes} from "react-router-dom";
import UsersContainer from "../Users/UsersContainer";
import React from "react";
import EditContainer from "../Users/Edit/EditContainer";

function App() {
  return (
    <div className="App">

        <Routes>
            <Route path='/' element={<WelcomeContainer />}  />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/users/edit/:userId?' element={<EditContainer />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
