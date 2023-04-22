export let types = {
    INITIALIZE: "INITIALIZE",
    SELECT_ITEM: "SELECT_ITEM",
}

export let state = {
    items: [],
    selectedItem: {
        value: 0,
        label: ""
    },
    wasLoaded: false
}

export let getInitializeAction = (items, selectedItem) => ({type: types.INITIALIZE, items: items, selectedItem: selectedItem});
export let getSelectItemAction = (item) => ({type: types.SELECT_ITEM, item: item});

export let reducer = (state, action) => {
    let selected = null;
    switch (action.type){
        case types.INITIALIZE:
            if (action.items.length > 0){
                selected = action.items.find(item => item.label === action.selectedItem)
            }
            return {...state, items: [...action.items], selectedItem: selected}
        case types.SELECT_ITEM:
            return {...state, selectedItem: {...action.item}}
        default:
            return {...state};
    }
}


