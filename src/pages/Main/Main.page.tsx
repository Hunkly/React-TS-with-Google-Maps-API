import React from 'react';
import Map from '../../components/Map/Map';
import MainPageStyled from './Main.styled';
import Header from "../../components/Header";

export default function Main(){
    return(
        <MainPageStyled>
            <Header children="Main page"/>
            <div className="main-page__map">
                <Map/>
            </div>
        </MainPageStyled>
    )
}
