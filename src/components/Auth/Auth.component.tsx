import React from "react";
import { setPassword, setUserName, setLogged } from "../../store/auth/actions";
import Store from '../../store/store';
import StyledAuth from './Auth.styled';
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";


interface IAuthProps{
    userName?: string,
    password?: string,
    isLogged?: boolean
}

export function AuthComponent ({userName, password, isLogged}: IAuthProps) {

    function onEmailChange(event: React.ChangeEvent<HTMLInputElement>){
        Store.dispatch(setUserName(event.target.value));

    }

    function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>){
        Store.dispatch(setPassword(event.target.value));
    }

    function Login(){
        console.log('PROPS', {userName, password, isLogged});
        Store.dispatch(setLogged(true));
        window.location.href = "/main";
    }

    return(
        <StyledAuth>
                <p>Log in</p>
                <form onSubmit={() => {return(<Route exact path="/" render={() => (<Redirect to="/map"/>)}/>)}}>
                    <div className="auth__input">
                        <input
                            type="text"
                            placeholder="Email"
                            value={userName}
                            onChange={onEmailChange}
                        />
                    </div>
                    <div className="auth__input">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={onPasswordChange}
                        />
                    </div>
                </form>
            <div>
                <button className="auth__button" onClick={Login}>Sign in</button>
            </div>
        </StyledAuth>
    )
}

