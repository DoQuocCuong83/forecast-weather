import React, { useEffect, useState, useRef } from "react";
import Header from "./header";
import Search from "./search";
import Information from "./information";
import Footer from "./footer";
import { connect } from "react-redux";
import { getWeatherByLocationAction, getWeatherByNameAction, changeModeShow, changeLoadingStatus } from "../store/actions";
import Fade from "@material-ui/core/Fade";

const ForecastWeather = (props) => {

    const {
        weatherToday,
        loadingStatus,
        errorStatus,
        successStatus,
        modeShow,
        weatherSevenDay,
    } = props;

    const {
        getWeatherByLocation,
        getWeatherByName,
        changeModeShow,
        changeLoadingStatus
    } = props

    const [day, setDay] = useState("");
    const [date, setDate] = useState("");
    const [valueInput, setValueInput] = useState("");

    const inputRef = useRef();

    useEffect(() => {
        let today = new Date();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        setDay(days[today.getDay()]);
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        setDate(today.getDate() + " " + months[today.getMonth()]);
    }, [])

    useEffect(() => {
        const handleSuccess = position => {
            getWeatherByLocation(position.coords.latitude, position.coords.longitude);
        }
        const handleError = error => {
            getWeatherByName("Hanoi");
        }
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }, [getWeatherByLocation, getWeatherByName])

    const handleChangeInput = e => setValueInput(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        if (valueInput.length === 0) inputRef.current.focus();
        else {
            changeLoadingStatus();
            getWeatherByName(valueInput);
        }
    }

    return (
        <Fade in={true}>
            <div className="site-content">
                <Header />
                <Search
                    inputRef={inputRef}
                    handleChangeInput={handleChangeInput}
                    handleSubmit={handleSubmit}
                />
                <Information
                    day={day}
                    date={date}
                    weatherToday={weatherToday}
                    modeShow={modeShow}
                    weatherSevenDay={weatherSevenDay}
                    changeModeShow={changeModeShow}
                    loadingStatus={loadingStatus}
                    errorStatus={errorStatus}
                    successStatus={successStatus}
                />
                <Footer />
            </div>
        </Fade>
    );
}

const mapStateToProps = (state) => ({
    weatherToday: state.weatherToday,
    loadingStatus: state.loadingStatus,
    errorStatus: state.errorStatus,
    successStatus: state.successStatus,
    modeShow: state.modeShow,
    weatherSevenDay: state.weatherSevenDay,
});

const mapDispatchToProps = (dispatch) => ({
    getWeatherByLocation: (lat, lon) => getWeatherByLocationAction(lat, lon, dispatch),
    getWeatherByName: name => getWeatherByNameAction(name, dispatch),
    changeModeShow: () => dispatch(changeModeShow()),
    changeLoadingStatus: () => dispatch(changeLoadingStatus()),
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ForecastWeather));
