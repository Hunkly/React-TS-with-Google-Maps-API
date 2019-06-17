import React from 'react';
import Map from '../../components/Map/Map';
import MainPageStyled from './Main.styled';

export default function Main(){
    return(
        <MainPageStyled>
            <div className="main-page__header">Main page</div>
            <div className="main-page__map">
                <Map  />
            </div>
        </MainPageStyled>
    )
}
