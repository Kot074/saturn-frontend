import React from "react";
import {getInitializationAction, getOpenUserEditorAction} from "../../../redux/usersPageReducer";
import Users from "./Users";
import {connect} from "react-redux";
import {getUsers} from "../../../redux/api";

let mapStateToProps = (state) => {
    return {
        data: state.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSelectUser: (navigate, user) => {
            dispatch(getOpenUserEditorAction(navigate, user.id));
        },
        onCreateUser: (navigate) => {
            dispatch(getOpenUserEditorAction(navigate));
        },
        onInitialization: () => {
            getUsers().then((response) => {
                dispatch(getInitializationAction(response.data))
            })
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;