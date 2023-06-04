import React from 'react';

import {compose} from "redux";
import Welcome from "./Welcome";
import {withSidebar} from "../../hoc/withSidebar";
import {withHeader} from "../../hoc/withHeader";
import withAuthRedirect from "../../hoc/withAuthRedirect";

export default compose(
        withAuthRedirect,
        withHeader,
        withSidebar,
)(Welcome);
