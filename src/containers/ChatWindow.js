import React from "react";
import Header from '../components/Header/Header';
import Chats from "../components/Chats/Chats"
import _ from  "lodash";
import store from "../store"
import "./ChatWindow.css";
import MessageInput from "./MessageInput"

const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const {name, status} = state.contacts[activeUserId];
    const messages = state.messages[activeUserId];
    const { typing } = state;

    return (
        <div className="ChatWindow">
            <Header userName = {name} status = {status} />
            <Chats messages = {_.values(messages)} user_id = {activeUserId}/>
            <MessageInput value={typing} />
        </div>
    );
};

export default ChatWindow;