import React from "react";
import {getOpenUserEditorAction} from "../../../redux/usersPageReducer";
import Users from "./Users";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSelectUser: (navigate, user) => {
            dispatch(getOpenUserEditorAction(navigate, user.id));
        },
        onCreateUser: (navigate) => {
            dispatch(getOpenUserEditorAction(navigate));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;