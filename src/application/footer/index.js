import React from "react";
import { FooterContainer } from "./style";

const Footer = () => {
    return (
        <FooterContainer>
            <footer className="site-footer">
                <div className="container">
                    <p className="colophon">Developed by DQC. Template by Themezy.</p>
                </div>
            </footer>
        </FooterContainer>
    );
}

export default React.memo(Footer);