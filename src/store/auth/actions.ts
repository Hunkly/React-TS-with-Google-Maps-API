import {LOG_USER, UserAction, User} from "../../constants/actionTypes";


export function logUser(user: User): UserAction {
    console.log('test LOG_USER action:', user);
    return {
        type: LOG_USER,
        user:{
            userName: user.userName,
            password: user.password,
            isLogged: user.isLogged
        }
    }
}
