import axiosInstance from "./config";

const appId = "83c46e5f08655f9b1a8aafc278669250";

export const getTodayByNameRequest = (name) => {
    return axiosInstance.get("http://api.openweathermap.org/data/2.5/weather", {
        params: {
            q: name,
            lang: "vi",
            appid: appId,
        }
    });
}

export const getTodayByLocationRequest = (lat, lon) => {
    return axiosInstance.get("http://api.openweathermap.org/data/2.5/weather", {
        params: {
            lat: lat,
            lon: lon,
            lang: "vi",
            appid: appId,
        }
    })
}

export const getSevenDayByLocationRequest = (lat, lon) => {
    return axiosInstance.get("https://api.openweathermap.org/data/2.5/onecall", {
        params: {
            lat: lat,
            lon: lon,
            exclude: "current,minutely,hourly,alerts",
            lang: "vi",
            appid: appId,
        }
    })
}