import React from "react";
import './style.css';

const Header = ({ titulo, logo }) => {
    return (
        <>
            <div className="header">
                <h1>{titulo}</h1>
                <a href="">{logo}</a>
            </div>
        </>
    )
}

export default Header;