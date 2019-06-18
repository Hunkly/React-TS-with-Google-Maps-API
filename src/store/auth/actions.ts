import {ADD_USER_NAME, ADD_PASSWORD, UserLoginAction, LOGIN_USER} from "../../constants/actionTypes";


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

export function setLogged(isLogged: boolean): UserLoginAction {
    return {
        type: LOGIN_USER,
        logged: isLogged
    }
}
