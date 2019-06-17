import  { ADD_USER_NAME, ADD_PASSWORD, UserLoginAction } from "../../constants/actionTypes";


export function setUserName(userName: string): UserLoginAction {
    console.log('test action:',userName);
    return {
        type: ADD_USER_NAME,
        payload: userName
    }
}

export function setPassword(password: string): UserLoginAction {
    return {
        type: ADD_PASSWORD,
        payload: password
    }
}
