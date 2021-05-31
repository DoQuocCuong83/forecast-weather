const stateDefault = {
    weatherToday: {},
    loadingStatus: true,
    errorStatus: false,
    successStatus: false,
    modeShow: false,
    weatherSevenDay: {},
}

const reducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "CHANGE_WEATHER_TODAY":
            return {
                ...state,
                weatherToday: action.payload,
            }
        case "CHANGE_LOADING_STATUS": case "CHANGE_ERROR_STATUS": case "CHANGE_SUCCESS_STATUS" :
            return {
                ...state,
                loadingStatus: action.loadingStatus,
                errorStatus: action.errorStatus,
                successStatus: action.successStatus,
            }
        case "CHANGE_MODE_SHOW":
            return {
                ...state,
                modeShow: !state.modeShow,
            }
        case "CHANGE_WEATHER_SEVEN_DAY":
            return {
                ...state,
                weatherSevenDay: action.payload,
            }
        default:
            return state;
    }
};

export default reducer;