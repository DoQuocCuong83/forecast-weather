import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoadingPage } from "../baseUI/loading-page";

const ForecastWeather = React.lazy(() => import('../application'));

const Routes = () => {
    return (
        <Router>
            <Route path="/" exact>
                <Suspense fallback={<LoadingPage />}>
                    <ForecastWeather />
                </Suspense>
            </Route>
        </Router>
    );
}

export default Routes;