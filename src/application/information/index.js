import React from "react";
import { InformationContainer } from "./style";
import icon2 from "./icon/icon-2.svg";
import icon3 from "./icon/icon-3.svg";
import iconUmberella from "./icon-umberella.png";
import iconWind from "./icon-wind.png";
import iconCompass from "./icon-compass.png";

const Detail = React.memo(() => {
    return (
        <div className="more-information">
            <div className="information">
                <div className="list-information">
                    <div className="item-information">Nhiệt độ : &nbsp;&nbsp;100<sup>o</sup>C</div>
                    <div className="item-information">Vận tốc gió : &nbsp;&nbsp;100 Km/h</div>
                </div>
                <div className="list-information">
                    <div className="item-information">Mặt trời lặn : &nbsp;18h</div>
                    <div className="item-information">Mặt trời mọc : 9h</div>
                </div>
                <div className="list-information">
                    <div className="item-information">Tầm nhìn : 100 Km</div>
                    <div className="item-information">Tầm nhìn : 100 Km</div>
                </div>
            </div>
        </div>
    );
})

const MoreDay = React.memo(() => {
    return (
        <div className="forecast">
            <div className="forecast-header">
                <div className="day">Tuesday</div>
            </div>
            <div className="forecast-content">
                <div className="forecast-icon">
                    <img src={icon3} alt="" width={48} />
                </div>
                <div className="degree">23<sup>o</sup>C</div>
                <small>18<sup>o</sup></small>
            </div>
        </div>
    );
})

const Information = () => {
    return (
        <InformationContainer>
            <div className="forecast-table">
                <div className="container">
                    <div className="forecast-container">
                        <div className="today forecast">
                            <div className="forecast-header">
                                <div className="day">Monday</div>
                                <button className="more-day">Dự báo 5 ngày tới</button>
                                <div className="date">6 Oct</div>
                            </div>
                            <div className="forecast-content">
                                <div className="location">New York</div>
                                <div className="degree">
                                    <div className="num">23<sup>o</sup>C</div>
                                    <div className="forecast-icon">
                                        <img src={icon2} alt="" width={90} />
                                    </div>
                                </div>
                                <span><img src={iconUmberella} alt="" />20%</span>
                                <span><img src={iconWind} alt="" />18km/h</span>
                                <span><img src={iconCompass} alt="" />East</span>
                            </div>
                            <Detail />
                        </div>
                    </div>
                </div>
            </div>
        </InformationContainer>
    );
}

export default React.memo(Information);