import { getTodayByNameRequest, getTodayByLocationRequest, getSevenDayByLocationRequest } from "../api/requests";
import { configIcon } from "./config";

export const changeWeatherToday = data => ({
    type: "CHANGE_WEATHER_TODAY",
    payload: data
});

export const changeModeShow = () => ({
    type: "CHANGE_MODE_SHOW",
})

export const changeWeatherSevenDay = data => ({
    type: "CHANGE_WEATHER_SEVEN_DAY",
    payload: data,
})

export const changeLoadingStatus = () => ({
    type: "CHANGE_LOADING_STATUS",
    loadingStatus: true,
    errorStatus: false,
    successStatus: false,
})

export const changeErrorStatus = () => ({
    type: "CHANGE_ERROR_STATUS",
    loadingStatus: false,
    errorStatus: true,
    successStatus: false,
})

export const changeSuccessStatus = () => ({
    type: "CHANGE_SUCCESS_STATUS",
    loadingStatus: false,
    errorStatus: false,
    successStatus: true,
})

// Get data current day and next 6 day

const getWeather = (data, dispatch) => {
    let location = data.coord;
    location.name = data.name;
    let mainWeather = {
        icon: configIcon[data.weather[0].id],
        temp: (data.main.temp - 273.15).toFixed(0),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        pressure: data.main.pressure,
    };
    let detailWeather = {
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        tempMin: (data.main.temp_min - 273.15).toFixed(0),
        tempMax: (data.main.temp_max - 273.15).toFixed(0),
        windSpeed: data.wind.speed,
        clouds: data.clouds.all,
    };
    let weatherToday = {
        location: location,
        main: mainWeather,
        detail: detailWeather,
    };
    dispatch(changeWeatherToday(weatherToday));
    getSevenDayByLocationRequest(data.coord.lat, data.coord.lon).then(response => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let today = new Date();
        today = today.getDay();
        response.daily.pop();
        response.daily.shift();
        let weatherSevenDay = response.daily.map(value => {
            today != 6 ? today++ : today = 0;
            return {
                day: days[today],
                icon: configIcon[value.weather[0].id],
                tempC: (value.temp.day - 273.15).toFixed(0),
                tempK: value.temp.day.toFixed(0),
            }
        })
        dispatch(changeWeatherSevenDay(weatherSevenDay));
        dispatch(changeSuccessStatus());
    })
}

export const getWeatherByNameAction = (name, dispatch) => {
    getTodayByNameRequest(name)
        .then(response => getWeather(response, dispatch))
        .catch(error => dispatch(changeErrorStatus()))
}

export const getWeatherByLocationAction = (lat, lon, dispatch) => {
    getTodayByLocationRequest(lat, lon)
        .then(response => getWeather(response, dispatch))
        .catch(error => dispatch(changeErrorStatus()))
}