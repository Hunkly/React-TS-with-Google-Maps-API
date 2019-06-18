import React from 'react';
import Header from '../../components/Header';
import Auth from "../../components/Auth/Auth";
import LoginStyled from './Login.styled';

export default function LoginPage(){
    
    return(
        <LoginStyled>
            <Header children="Authorization" />
            <div className="login__auth">
                <Auth />
            </div>
        </LoginStyled>
    )
}
