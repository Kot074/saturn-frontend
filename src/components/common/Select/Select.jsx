import React from "react";
import styles from './Select.module.css';

const Select = () => {
    let state = {
        expand: true,
        items: [
            {
                id: 1,
                label: "Item 1",
                value: "12345"
            },
            {
                id: 2,
                label: "Item 2",
                value: "][poiuy"
            },
            {
                id: 3,
                label: "Item 3",
                value: "zxcvbn"
            },
            {
                id: 4,
                label: "Item 4",
                value: "asdfgh"
            },
            {
                id: 5,
                label: "Item 5",
                value: "qwerty"
            },
        ],
        selectedItem: {}
    }
    const onFocusIn = () => {
        console.log("Focus is in!");
    }
    const onFocusOut = () => {
        console.log("Focus is out!");
    }

    const onSelect = (item) => {
        state.selectedItem = item;
        console.log(item);
    }

    return (
        <div className={styles.container}>
            <input type='text' onFocus={onFocusIn} onBlur={onFocusOut} className={styles.input} value={state.selectedItem.label ?? ''}/>
            {
                state.expand &&
                <div className={styles.itemsField}>
                    {state.items.map(item => {
                        return (
                            <div className={styles.item} onClick={() => onSelect(item)} key={item.id}>{item.label}</div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Select;