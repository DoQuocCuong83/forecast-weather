import React from "react";
import Header from "./header";
import Search from "./search";
import Information from "./information";
import Footer from "./footer";

const ForecastWeather = () => {
    return (
        <div className="site-content">
            <Header />
            <Search />
            <Information />
            <Footer />
        </div>
    );
}

export default React.memo(ForecastWeather);
