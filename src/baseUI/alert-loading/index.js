import React from "react";
import { AlertLoadingContainer } from "./style";
import Fade from "@material-ui/core/Fade";

export const AlertLoading = () => {
    return (
        <Fade in={true}>
            <AlertLoadingContainer>
                <div>
                    <p>Loading ...</p>
                </div>
            </AlertLoadingContainer>
        </Fade>
    );
}