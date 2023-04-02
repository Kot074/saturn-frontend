import React from "react";
import {
    getChangeCurrentUserLastnameAction,
    getChangeCurrentUserNameAction, getChangeCurrentUserPatronymicAction,
    getInitNewUserAction, getSetCurrentUserAction
} from "../../../../redux/userEditReducer";
import Edit from "./Edit";
import {connect} from "react-redux";
import {getUserById} from "../../../../redux/api";

const mapStateToProps = (state) => {
    return {
        currentUser: state.editingUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initialize: (currentId, editingUser) => {
                if (!currentId && editingUser.id !== 0) {
                    dispatch(getInitNewUserAction());
                } else if (currentId && editingUser.id.toString() !== currentId){
                    getUserById(currentId).then(response => {
                        dispatch(getSetCurrentUserAction(response.data))
                    })
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