import styled from '@emotion/styled';

export default styled.div`
    width: 50vw;
    height: 30vw;
    
    .container{
        height:100%;
    }
    
    .map__button{
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
    
    .map__navigation{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
`






