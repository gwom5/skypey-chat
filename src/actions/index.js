import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SET_EDITING, SEND_MESSAGE, SEARCH_CONTACTS, DELETE_MESSAGE, EDIT_MESSAGE} from "../constants/action-types";

export const setActiveUserId = id => ({
    type: SET_ACTIVE_USER_ID,
    payload: id
});

export const setTypingValue = (value)=>{
    return {
        type: SET_TYPING_VALUE,
        payload: value
}};

export const setEditing = (value) =>{
    return {
        type: SET_EDITING,
        payload: value
    }
}

export const sendMessage = (message, userId)=>{
   return  {
        type: SEND_MESSAGE,
        payload: {
            message,
            userId
        }
    }
};

export const searchContacts = value=>({
    type: SEARCH_CONTACTS,
    payload: value
});

export const deleteMessage = (userId, number) =>({
    type: DELETE_MESSAGE,
    payload:{
        userId, 
        number
    }
});

export const editMessage = (message, userId, messageId) =>({
    type: EDIT_MESSAGE,
    payload:{
        userId,
        message, 
        messageId
    }
}); 