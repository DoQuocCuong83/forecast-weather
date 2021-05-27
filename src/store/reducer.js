const stateDefault = {
    location: null,
    test: false,
}

const reducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "CHANGE_LOCATION":
            return {
                ...state,
                location: action.payload
            }
        case "SET_TEST":
            return {
                ...state,
                test: !state.test
            }
        default:
            return state;
    }
};

export default reducer;