import {SET_EDITING} from "../constants/action-types";

export default function editing(state = "", action) {
    switch (action.type) {
        case SET_EDITING:
            return action.payload;
        default:
            return state;
    }
}