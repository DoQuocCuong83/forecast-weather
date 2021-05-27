import React from "react";
import { SearchContainer } from "./style";

const Search = () => {
    return (
        <SearchContainer>
            <div className="hero">
                <div className="container">
                    <form action="#" className="find-location">
                        <input type="text" placeholder="Find your location..." />
                        <div className="form-button">
                            <input type="button" value="Tìm trên bản đồ" />
                            <input type="submit" value="Tìm kiếm" />
                        </div>
                    </form>
                </div>
            </div>
        </SearchContainer>
    );
}

export default React.memo(Search);