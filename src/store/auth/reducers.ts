import {ADD_PASSWORD, ADD_USER_NAME, UserLoginAction} from "../../constants/actionTypes";

const defaultState = {
    userName: '',
    password: ''
};

export default function authReducer(state = defaultState, action: UserLoginAction){

    switch(action.type){
        case ADD_USER_NAME:{
            console.log('test reducer');
            console.log(state);
            return{
                ...state,
                userName: action.payload
            };
        }
        case ADD_PASSWORD:
            return{
                ...state,
                password: action.payload
            }

    }
    return state;
};

