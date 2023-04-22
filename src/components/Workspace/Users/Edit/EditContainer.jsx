import React from "react";
import {
    getChangeCurrentUserEmailAction,
    getChangeCurrentUserLastnameAction,
    getChangeCurrentUserNameAction,
    getChangeCurrentUserPasswordAction,
    getChangeCurrentUserPatronymicAction,
    getChangeCurrentUserPhoneAction, getChangeRoleAction,
    getInitNewUserAction, getSaveAction,
    getSetCurrentUserAction
} from "../../../../redux/userEditReducer";
import Edit from "./Edit";
import {connect} from "react-redux";
import {getRoles, getUserById} from "../../../../redux/api";

const mapStateToProps = (state) => {
    return {
        currentUser: state.editingUser.currentUser,
        items: state.editingUser.roles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initialize: (currentId, editingUser) => {
                getRoles().then(response => {
                    let roles = response.data.map(item => ({label: item, value: response.data.indexOf(item)}));

                    if (!currentId) {
                        dispatch(getInitNewUserAction(roles));
                    } else if (currentId && editingUser.id.toString() !== currentId){
                        getUserById(currentId).then(response => {
                            dispatch(getSetCurrentUserAction(roles, response.data))
                        })
                    }
                })
            },
        onChangeLastname: (text) => {
                dispatch(getChangeCurrentUserLastnameAction(text));
            },
        onChangeName: (text) => {
                dispatch(getChangeCurrentUserNameAction(text));
            },
        onChangePatronymic: (text) => {
                dispatch(getChangeCurrentUserPatronymicAction(text));
            },
        onChangePhone: (text) => {
            dispatch(getChangeCurrentUserPhoneAction(text));
        },
        onChangeEmail: (text) => {
            dispatch(getChangeCurrentUserEmailAction(text));
        },
        onChangePassword: (text) => {
            dispatch(getChangeCurrentUserPasswordAction(text));
        },
        onSelectRole: (item) => {
            dispatch(getChangeRoleAction(item));
        },
        onSave: () => {
            dispatch(getSaveAction())
        }
    }
}

const EditContainer = connect(mapStateToProps, mapDispatchToProps)(Edit);

export default EditContainer;