import React from "react";
import { connect } from "react-redux";
import { setPassword, setUserName } from "../../store/auth/actions";
import { AppState } from "../../store/reducers";
import Store from '../../store/store';
import StyledAuth from './Auth.styled';
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";


interface IAuthProps{
    userName?: string,
    password?: string,
}

export function AuthComponent ({userName, password}: IAuthProps) {

    function onEmailChange(event: React.ChangeEvent<HTMLInputElement>){
        Store.dispatch(setUserName(event.target.value));

    }

    function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>){
        Store.dispatch(setPassword(event.target.value));
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
                    <div>
                        <button className="auth__button" onClick={() => { }}>Sign in </button>
                    </div>
                </form>
        </StyledAuth>
    )
};

const mapStateToProps = (state: AppState) => {
    return {
        userName: state.Auth.userName,
        password: state.Auth.password
    };
};

// const mapDispatchToProps = {
//         setUserName: setUserName,
//         setPassword: setPassword
// };

export default connect(mapStateToProps, null)(AuthComponent);
