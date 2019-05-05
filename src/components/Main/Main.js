import React from "react";
import "./Main.css";
import Empty from "../Empty/Empty";
import ChatWindow from "../../containers/ChatWindow";


const Main = ({user, activeUserId}) => {

    const renderMainContent = () => {
        console.log("In render main content")
        if (!activeUserId) {
            console.log("empty");
            return <Empty user={user} activeUserId={activeUserId} />;
        } else {
            console.log("not empty");
            return <ChatWindow activeUserId={activeUserId} />;
        }
    };
    return <main className="Main">{renderMainContent()}</main>;
};

export default Main;