import React from 'react';

import {compose} from "redux";
import Edit from "./Edit";
import {withHeader} from "../../../hoc/withHeader";
import {withSidebar} from "../../../hoc/withSidebar";

export default compose(
    withHeader,
    withSidebar,
)(Edit);