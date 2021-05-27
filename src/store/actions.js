import { getTodayByNameRequest } from "../api/requests";

export const changeLocation = (data) => ({
    type: "CHANGE_LOCATION",
    payload: data
});

export const setTest2 = () => ({
    type: "SET_TEST",
});

export const getTodayByNameAction = (name, dispatch) => {
    getTodayByNameRequest(name).then(response => {
        let location = response.coord;
        dispatch(changeLocation(location));
        dispatch(setTest2())
    })
}