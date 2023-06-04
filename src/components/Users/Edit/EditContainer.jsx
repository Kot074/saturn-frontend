import React from 'react';

import {compose} from "redux";
import Edit from "./Edit";
import {withHeader} from "../../../hoc/withHeader";
import {withSidebar} from "../../../hoc/withSidebar";
import withAuthRedirect from "../../../hoc/withAuthRedirect";

export default compose(
    withAuthRedirect,
    withHeader,
    withSidebar,
)(Edit);
