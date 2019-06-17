import styled from '@emotion/styled';

export default styled.div`
    background-color: #69B2DB;
    color: #fff;
    font-weight: 500;
    font-size: 24px;
    width: 400px;
    height: 230px;
    
    .auth__input{
        input{
        padding: 10px 20px;
        }
        margin-bottom: 10px;
    }
    
    .auth__button{
        background-color: #FFF; 
        border: none;
        border-radius: 7px;
        color: #000;
        padding: 10px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        
        :hover{
        transition: 0.3s;
        background-color: #7ECF72;
        }   
    }
`
