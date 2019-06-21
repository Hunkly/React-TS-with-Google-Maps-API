import React from "react";
import store from '../../store/store';
import StyledAuth from './Auth.styled';
import { setPassword, setUserName, setLogged } from "../../store/auth/actions";
import { Route, Redirect } from "react-router-dom";
import {AppState} from "../../store/reducers";
import {connect} from "react-redux";

interface IAuthProps{
    userName?: string,
    password?: string,
    isLogged?: boolean
}

export function AuthComponent ({userName, password, isLogged}: IAuthProps) {

    function onEmailChange(event: React.ChangeEvent<HTMLInputElement>){
        store.dispatch(setUserName(event.target.value));
    }

    function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>){
        store.dispatch(setPassword(event.target.value));
    }

    function Login(){
        console.log('PROPS', {userName, password, isLogged});
        store.dispatch(setLogged(true));
        window.location.href = "/main";
    }

    return(
        <StyledAuth>
                <p>Log in</p>
                <form
                    onSubmit={
                        () => {
                            return(
                                <Route
                                    exact path="/"
                                    render={
                                        () => (
                                            <Redirect
                                                to="/map"
                                            />
                                        )
                                    }
                                />
                            )
                        }
                    }
                >
                    <div
                        className="auth__input"
                    >
                        <input
                            type="text"
                            placeholder="Email"
                            value={userName}
                            onChange={onEmailChange}
                        />
                    </div>
                    <div
                        className="auth__input"
                    >
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={onPasswordChange}
                        />
                    </div>
                </form>
            <div>
                <button
                    className="auth__button"
                    onClick={Login}
                >
                    Sign in
                </button>
            </div>
        </StyledAuth>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        userName: state.Auth.userName,
        password: state.Auth.password,
        isLogged: state.Auth.isLogged
    };
};

export default connect(mapStateToProps, null)(AuthComponent);
