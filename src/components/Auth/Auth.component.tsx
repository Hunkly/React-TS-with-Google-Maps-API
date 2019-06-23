import React from "react";
import StyledAuth from './Auth.styled';
import { AppState } from "../../store/reducers";
import { connect } from "react-redux";
import {logUser} from "../../store/auth/actions";
import store from '../../store/store';

interface IAuthProps{
    isLogged: boolean
    userName: string
    password: string
}

interface IAuthState{
    userName: string,
    password: string
}

export class AuthComponent extends React.Component<IAuthProps,IAuthState> {
    constructor(props: IAuthProps){
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.Login = this.Login.bind(this);
    }

    onEmailChange(event: React.ChangeEvent<HTMLInputElement>){
        this.setState(
            {
                userName: event.target.value
            }
        )
    }

    onPasswordChange(event: React.ChangeEvent<HTMLInputElement>){
        this.setState(
            {
                password: event.target.value
            }
        )
    }

    Login(event: React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        if(this.state.userName && this.state.password){
            store.dispatch(logUser({userName: this.state.userName, password: this.state.password, isLogged: true}));
            window.location.href = "/main";
        } else {
            alert('Please fill the data');
        }
        console.log('User: ', this.state);
    }

    render(){
        return(
            <StyledAuth>
                <p>Login</p>
                <form>
                    <div className="auth__input">
                        <input
                            type="text"
                            placeholder="Email"
                            value={this.state.userName}
                            onChange={this.onEmailChange}
                        />
                    </div>
                    <div className="auth__input">
                        <input
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                        />
                    </div>
                    <button
                        className="auth__button"
                        onClick={this.Login}
                    >
                        Sign in
                    </button>
                </form>
            </StyledAuth>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        userName: state.Auth.userName,
        password: state.Auth.password,
        isLogged: state.Auth.isLogged
    };
};

export default connect(mapStateToProps, null)(AuthComponent);
