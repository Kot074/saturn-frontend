import React from 'react';

import {compose} from "redux";
import Welcome from "./Welcome";
import {withSidebar} from "../../hoc/withSidebar";
import {withHeader} from "../../hoc/withHeader";

export default compose(
        withHeader,
        withSidebar,
)(Welcome);