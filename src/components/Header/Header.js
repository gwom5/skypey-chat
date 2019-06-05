import React from "react";
import "./Header.css";

const Header =(props)=> {
    const {userName, status} = props;
    return (
        <header className="Header">
            <h1 className="Header__name">{userName}</h1>
            <p className="Header__status">{status}</p>
        </header>
    );
}

export default Header;