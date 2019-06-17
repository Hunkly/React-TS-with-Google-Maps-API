import React from 'react';
import HeaderStyled from './Header.styled';

interface IHeaderProps{
    children?: string,
}

const defaultProps: IHeaderProps = {
    children: ''
};

export default function Header(children: IHeaderProps){
    return(
        <HeaderStyled>
            <p>{children.children}</p>
        </HeaderStyled>
    );
}
Header.defaultProps = defaultProps;
