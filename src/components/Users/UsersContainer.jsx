import React from 'react';

import Users from "./Users";
import {compose} from "redux";
import {withSidebar} from "../../hoc/withSidebar";
import {withHeader} from "../../hoc/withHeader";

export default compose(
    withHeader,
    withSidebar
)(Users);