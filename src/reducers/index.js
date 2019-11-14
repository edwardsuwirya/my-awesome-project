import {combineReducers} from "redux";

const userActiveReducer = (userActive = {}, action) => {
    if (action.type === 'AUTH_USER') {
        return action.payload;
    }
    return userActive;
};

const changeSessionReducer = (isAUth = false, action) => {
    if (action.type === 'IS_AUTHENTICATED') {
        return action.payload;
    }
    return isAUth;
};

export default combineReducers({
    userActive: userActiveReducer,
    changeSession: changeSessionReducer
});