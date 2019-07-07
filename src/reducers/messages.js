import {getMessages} from "../static-data";
import { SEND_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE} from "../constants/action-types";
import _ from  "lodash";

    let {userId, message, allUserMessages, number} = "";
export default function messages(state = getMessages(10), action) {
    switch(action.type){
        case SEND_MESSAGE:
                userId = action.payload.userId;
                message = action.payload.message
                 allUserMessages = state[userId];
                number = + Object.keys(allUserMessages).pop() + 1;
            return {
                ...state,
                [userId]:{
                    ...allUserMessages,
                    [number]:{
                        number,
                        text: message,
                        is_user_msg: true,
                        edited: false
                    }
                }

            };
        case DELETE_MESSAGE:
                userId = action.payload.userId;
                number = action.payload.number;
                allUserMessages = _.cloneDeep(state[userId]); //make a deep clone of the chats with  a user.. state[user] refers to all the chats with a particular contact.
                delete allUserMessages[number];//delete the message in the current index.
            return {
                ...state,
                [userId]:{
                    ...allUserMessages
                }
            }

        case EDIT_MESSAGE: 
            userId = action.payload.userId;
            message = action.payload.message;
            number = action.payload.messageId;
            allUserMessages = _.cloneDeep(state[userId]);
            allUserMessages[number].text = message;
            allUserMessages[number].edited = true;

            return{
                ...state,
                [userId]: {
                    ...allUserMessages
                }
            }

        default:
            return state;
    }
}
