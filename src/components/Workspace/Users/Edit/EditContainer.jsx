import React from "react";
import {
    getChangeCurrentUserLastnameAction,
    getChangeCurrentUserNameAction, getChangeCurrentUserPatronymicAction,
    getCurrentUserFromUrlAction, getInitNewUserAction
} from "../../../../redux/userEditReducer";
import Edit from "./Edit";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        currentUser: state.editingUser,
        users: state.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initialize: (currentId, editingUser, users) => {
                if (!currentId && editingUser.id !== 0) {
                    dispatch(getInitNewUserAction());
                } else if (currentId && editingUser.id.toString() !== currentId){
                    dispatch(getCurrentUserFromUrlAction(currentId, users.data))
                }
            },
        onChangeLastname: (text) => {
                dispatch(getChangeCurrentUserLastnameAction(text));
            },
        onChangeName: (text) => {
                dispatch(getChangeCurrentUserNameAction(text));
            },
        onChangePatronymic: (text) => {
                dispatch(getChangeCurrentUserPatronymicAction(text));
            }
    }
}

const EditContainer = connect(mapStateToProps, mapDispatchToProps)(Edit);

export default EditContainer;