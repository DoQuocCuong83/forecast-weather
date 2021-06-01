import React from "react";
import { AlertErrorContainer } from "./style";
import Fade from "@material-ui/core/Fade";

export const AlertError = () => {
    return (
        <Fade in={true}>
            <AlertErrorContainer>
                <div>
                    <p>Không tìm thấy !!!</p>
                </div>
            </AlertErrorContainer>
        </Fade>
    );
}