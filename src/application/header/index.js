import React, { useEffect, useState } from "react";
import { ClockContainer, HeaderContainer } from "./style";

const Clock = () => {

    const [time, setTime] = useState("");

    useEffect(() => {
        setTimeout(() => {
            let timeNow = new Date();
            timeNow = timeNow.getHours() + " : " + timeNow.getMinutes() + " : " + timeNow.getSeconds();
            setTime(timeNow);
        }, 1000)
    }, [time])

    return (
        <ClockContainer>
            <div className="branding">
                {time}
            </div>
        </ClockContainer>
    );
}

const Header = () => {

    return (
        <HeaderContainer>
            <div className="site-header">
                <div className="container">
                    <Clock />
                    <div className="main-navigation">
                        <ul className="menu">
                            <li className="menu-item current-menu-item"><a href="/">Home</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </HeaderContainer>
    );
}

export default React.memo(Header);