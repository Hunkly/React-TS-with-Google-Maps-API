import {ADD_PASSWORD, ADD_USER_NAME, LOGIN_USER, UserLoginAction} from "../../constants/actionTypes";

const defaultState = {
    userName: '',
    password: '',
    isLogged: false
};

export default function authReducer(state = defaultState, action: UserLoginAction){
    switch(action.type){
        case ADD_USER_NAME:{
            console.log('test ADD_USER_NAME reducer');
            console.log(state);
            return{
                ...state,
                userName: action.payload
            };
        }
        case ADD_PASSWORD: {
            console.log('test ADD_PASSWORD reducer');
            console.log(state);
            return {
                ...state,
                password: action.payload
            }
        }
        case LOGIN_USER: {
            console.log('test LOGIN_USER reducer');
            console.log(state);
            return {
                ...state,
                isLogged: action.logged
            }
        }
    }
    return state;
};

