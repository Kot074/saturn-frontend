import React from 'react';

import Users from "./Users";
import {compose} from "redux";
import {withSidebar} from "../../hoc/withSidebar";
import {withHeader} from "../../hoc/withHeader";
import withAuthRedirect from "../../hoc/withAuthRedirect";

export default compose(
    withAuthRedirect,
    withHeader,
    withSidebar
)(Users);
