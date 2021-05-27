import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ForecastWeather from "../application";

const Routes = () => {
    return (
        <Router>
            <Route path="/" exact>
                <ForecastWeather />
            </Route>
        </Router>
    );
}

export default Routes;