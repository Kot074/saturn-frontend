import React from "react";
import {
    getChangeCurrentUserLastnameAction,
    getChangeCurrentUserNameAction, getChangeCurrentUserPatronymicAction,
    getCurrentUserFromUrlAction, getInitNewUserAction
} from "../../../../redux/userEditReducer";
import StoreContext from "../../../../store-context";
import Edit from "./Edit";

const EditContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const init = (currentId) => {
                    if (!currentId && store.getState().editingUser.id !== 0) {
                        store.dispatch(getInitNewUserAction());
                    } else if (currentId && store.getState().editingUser.id.toString() !== currentId){
                        store.dispatch(getCurrentUserFromUrlAction(currentId, store.getState().users.data))
                    }
                }

                const onChangeLastname = (text) => {
                    store.dispatch(getChangeCurrentUserLastnameAction(text));
                }
                const onChangeName = (text) => {
                    store.dispatch(getChangeCurrentUserNameAction(text));
                }
                const onChangePatronymic = (text) => {
                    store.dispatch(getChangeCurrentUserPatronymicAction(text));
                }
                return <Edit initialize={init} currentUser={store.getState().editingUser} onChangeLastname={onChangeLastname} onChangeName={onChangeName} onChangePatronymic={onChangePatronymic} />
            }}
        </StoreContext.Consumer>
    )
}

export default EditContainer;