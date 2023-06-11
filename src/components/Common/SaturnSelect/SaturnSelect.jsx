import React, {useEffect, useReducer} from "react";
import styles from './SaturnSelect.module.css';
import * as reducer from "./SaturnSelectReducer";
import {Select} from "antd";

const SaturnSelect = (props) => {
    const [state, dispatch] = useReducer(reducer.reducer, reducer.state)

    useEffect(() => {
        dispatch(reducer.getInitializeAction(props.options, props.selectedOption));
    }, [props])

    const onSelect = (value) => {
        let selected = state.items.find(item => item.value === value);
        props.onSelect(selected)
        dispatch(reducer.getSelectItemAction(selected));
    }
    return (
        <Select {...props}
                className={styles.input}
                showSearch
                placeholder={props.placeHolder ?? ''}
                optionFilterProp={'children'}
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                value={state.selectedItem}
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={state.items}
                onSelect={onSelect}
        />
    )
}

export default SaturnSelect;
