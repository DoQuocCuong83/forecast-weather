import React from "react";
import { InformationContainer } from "./style";
import iconUmberella from "./icon-umberella.png";
import iconWind from "./icon-wind.png";
import iconCompass from "./icon-compass.png";

const Detail = React.memo((props) => {

    const { weatherToday } = props;

    return (
        <div className="more-information">
            <div className="information">
                <div className="list-information">
                    <div className="item-information">Cao nhất : {weatherToday.detail.tempMax} <sup>o</sup>C</div>
                    <div className="item-information">Thấp nhất : {weatherToday.detail.tempMin} <sup>o</sup>C</div>
                </div>
                <div className="list-information">
                    <div className="item-information">Áp suất : {weatherToday.detail.pressure}hPa</div>
                    <div className="item-information">Vận tốc gió : {weatherToday.detail.windSpeed}m/s</div>
                </div>
                <div className="list-information">
                    <div className="item-information">Độ ẩm : {weatherToday.detail.humidity}%</div>
                    <div className="item-information">Mây mù : {weatherToday.detail.clouds}%</div>
                </div>
            </div>
        </div>
    );
})

const MoreDay = React.memo((props) => {

    const { weatherSevenDay } = props;

    return (
        <>
            {weatherSevenDay.map((value, index) => {
                return (
                    <div key={index} className="forecast">
                        <div className="forecast-header">
                            <div className="day">{value.day}</div>
                        </div>
                        <div className="forecast-content">
                            <div className="forecast-icon">
                                <img src={require(`${value.icon}`).default} width={48} />
                            </div>
                            <div className="degree">{value.tempC}<sup>o</sup>C</div>
                            <small>{value.tempK}<sup>o</sup>K</small>
                        </div>
                    </div>
                )
            })}

        </>
    );
})

const Information = (props) => {

    const { weatherToday, day, date, modeShow, weatherSevenDay } = props;

    const { changeModeShow } = props;

    return (
        <InformationContainer>
            <div className="forecast-table">
                <div className="container">
                    <div className="forecast-container">
                        <div className="today forecast">
                            <div className="forecast-header">
                                <div className="day">{day}</div>
                                <button onClick={changeModeShow} className="more-day">{!modeShow ? "Dự báo 7 ngày tới" : "Chi tiết"}</button>
                                <div className="date">{date}</div>
                            </div>
                            <div className="forecast-content">
                                <div className="location">{weatherToday.location.name}</div>
                                <div className="degree">
                                    <div className="num">{weatherToday.main.temp}<sup>o</sup>C</div>
                                    <div className="forecast-icon">
                                        <img src={require(`${weatherToday.main.icon}`).default} alt="photo" width={90} />
                                    </div>
                                </div>
                                <span><img src={iconUmberella} alt="" />{weatherToday.main.humidity} %</span>
                                <span><img src={iconWind} alt="" />{weatherToday.main.windSpeed} m/s</span>
                                <span><img src={iconCompass} alt="" />{weatherToday.main.pressure} hPa</span>
                            </div>
                            {!modeShow ? <Detail weatherToday={weatherToday} /> : null}
                        </div>
                        {modeShow ? <MoreDay weatherSevenDay={weatherSevenDay} /> : null}
                    </div>
                </div>
            </div>
        </InformationContainer>
    );
}

export default React.memo(Information);