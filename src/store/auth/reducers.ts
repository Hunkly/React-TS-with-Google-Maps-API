import {LOG_USER, UserAction, User} from "../../constants/actionTypes";

const initialState: User = {
            userName: '',
            password: '',
            isLogged: false
};

export default function authReducer(state = initialState, action: UserAction){
    switch(action.type){
        case LOG_USER:{
            console.log('test LOG_USER reducer', action);
            return{
                ...state,
                userName: action.user.userName,
                password: action.user.password,
                isLogged: action.user.isLogged
            };
        }
    }
    return state;
};

