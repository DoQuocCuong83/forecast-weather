import React, { useEffect, useState } from "react";
import { ClockContainer, HeaderContainer } from "./style";
import { changeLocation, setTest2, getTodayByNameAction } from "../../store/actions";

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

const Header = (props) => {
    return (
        <HeaderContainer>
            <div className="site-header">
                <div className="container">
                    <Clock />
                    <div className="main-navigation">
                        <ul className="menu">
                            <li className="menu-item current-menu-item"><a>Home</a></li>
                            <li className="menu-item"><a href="/">Nhận thông báo</a></li>
                            <li className="menu-item"><a href="/">Đăng nhập Facebook</a></li>
                            <li className="menu-item"><a href="/">Đăng nhập Google</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </HeaderContainer>
    );
}

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({
    getTodayByName: name => getTodayByNameAction(name, dispatch),
    changeLocation: location => dispatch(changeLocation(location)),
    setTest2: () => dispatch(setTest2()),
})

export default React.memo(Header);