const initialState = {
    notes: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return Object.assign({}, state, {
                notes: state.notes.concat(action.payload)
            });
        default:
            return state;
    }
};