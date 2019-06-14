
import {SEARCH_CONTACTS} from "../constants/action-types"


export default function searching(state = "", action){
    switch(action.type){
        case SEARCH_CONTACTS:
             return action.payload;
        default:
            return state
    }
  
}