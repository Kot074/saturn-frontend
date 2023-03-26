import React from "react";
import {getOpenUserEditorAction} from "../../../redux/usersPageReducer";
import Users from "./Users";
import StoreContext from "../../../store-context";

const UsersContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const selectUser = (navigate, user) => {
                        store.dispatch(getOpenUserEditorAction(navigate, user.id));
                    };
                    const createUser = (navigate) => {
                        store.dispatch(getOpenUserEditorAction(navigate));
                    };

                    return (
                        <Users onSelectUser={selectUser} onCreateUser={createUser}
                           users={store.getState().users}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default UsersContainer;