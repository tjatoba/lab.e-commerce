import React from "react";
import styled from "styled-components";


const MainContainer = styled.div`
    display:flex;
    width: 100%;
    height: 100px;
    background-color: #2e3836;
    align-items: center;
    justify-content: center;

    h3{
        font-family: "Montserrat", sans-serif;
        font-weight: lighter;
        font-size: 20px;
    }   
    a{
        text-decoration: none;
        color: white;
        :hover{
            color: #FFAB0F
        }
    }
    
`


export default class Footer extends React.Component{

    render (){
        return (
            <MainContainer>

                <h3>Feito com <span>❤️</span> por <a target="_blank" href='https://github.com/janiscostadelli' >Janis</a>, <a target="_blank" href='https://github.com/tjatoba'>Jatobá</a>, <a target="_blank" href='https://github.com/quirinojess'>Jéssica</a> e <a target="_blank" href='https://github.com/parkournick2' >Nicolas</a>.</h3>

            </MainContainer>
        )
    }
} 