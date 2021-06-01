import React from "react";
import icon from "./icon.png";
import { LoadingPageContainer } from "./style";

export const LoadingPage = () => {
    return (
        <LoadingPageContainer>
            <div>
                <img src={icon} alt="icon" />
            </div>
        </LoadingPageContainer>
    );
}