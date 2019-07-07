import React from "react";
import store from "../store";
import { setTypingValue, sendMessage, setEditing, editMessage} from "../actions";
import "./MessageInput.css";

const MessageInput = ({ value }) => {

    const state = store.getState();

    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    };

    const handleSubmit =e=>{
        e.preventDefault();
        const { typing, activeUserId, editing} = state;
      
        if(typing.trim().length>0){//stop submission of empty message
            if(editing){
                 store.dispatch(editMessage(typing, activeUserId, editing));//editing is the id of the message being edited
                 store.dispatch(setEditing(""));
                 return
            }
            store.dispatch(sendMessage(typing, activeUserId));
        }
    }

    return (
        <form className="Message" onSubmit={handleSubmit}>
            <input
                className="Message__input"
                onChange={handleChange}
                value={value}
                placeholder="write a message"
            />
        </form>
    );
};

export default MessageInput;