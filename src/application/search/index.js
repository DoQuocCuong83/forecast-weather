import React from "react";
import { SearchContainer} from "./style";

const Search = (props) => {

    const { inputRef } = props;

    const { handleChangeInput, handleSubmit } = props;

    return (
        <SearchContainer>
            <div className="hero">
                <div className="container">
                    <form onSubmit={handleSubmit} className="find-location">
                        <input onChange={handleChangeInput} ref={inputRef} type="text" placeholder="Find your location..." />
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