import { combineReducers } from "redux";
import user from "./user";
import contacts from "./contacts";
import activeUserId from './activeUserId';
import messages from "./messages";
import typing from "./typing";
import searching from "./searching";
import editing from "./editing";

export default combineReducers({
    contacts,
    user,
    activeUserId,
    editing,
    messages,
    typing, 
    searching
});
