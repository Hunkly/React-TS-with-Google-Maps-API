import React from 'react';
import Header from '../../components/Header/Header.component';
import Auth from "../../components/Auth/Auth.component";
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
