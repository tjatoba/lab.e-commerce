import React from "react";
import camisa1 from "../../img/Camisas/1.png";
import camisa2 from "../../img/Camisas/2.png";
import camisa3 from "../../img/Camisas/3.png";
import camisa4 from "../../img/Camisas/4.png";
import camisa5 from "../../img/Camisas/5.png";
import camisa6 from "../../img/Camisas/6.png";
import camisa7 from "../../img/Camisas/7.png";
import styled from "styled-components";

const CardInfo = styled.div`
  width: 220px;
  height: 350px;
  :last-child {
    justify-self: flex-start;
    align-self: flex-start;
  }
  img {
    width: 220px;
    height: 220px;
    transition: transform 0.9s ease;
    opacity: 100%;
  }
  img:hover {
    opacity: 90%;
    transform: scale(0.9);
  }

  div {
    padding: 16px;
    text-transform: uppercase;
    font-weight: 400;
    color: #444457;
    letter-spacing: 3px;
  }
`;

const Titulo = styled.p`
    margin: 4px 0;
    color: #281b2e;
    font-weight: lighter;
`
const Preco = styled.p`
    margin: 4px 0;
    color: #281b2e;
    font-weight: 700;
`

const AddToCartButton = styled.button`
  margin-top: 10px;
  padding: 7px;
  border: 2px solid black;
  color: black;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 11px;
  transition: all 1s ease;
  &:hover {
    background: black;
    color: white;
  }
`;

export default class ProductsCard extends React.Component {
  imgCamisa = (n) => {
  switch (n) {
  case 1:
    return camisa1
    case 2:
    return camisa2
    case 3:
    return camisa3
    case 4:
    return camisa4
    case 5:
    return camisa5
    case 6:
    return camisa6
    case 7:
    return camisa7
    default:
    break;
}
  }
  render() {
    return (
      <CardInfo>
        
        <img alt="imagem do produto" src={this.imgCamisa(this.props.img)} />
          <Titulo>{this.props.name}</Titulo>
          <Preco>R${this.props.value}</Preco>
          <AddToCartButton
            onClick={() => {
              this.props.addProduct(this.props.name, this.props.value);
            }}
          >
            Adicionar no carrinho
          </AddToCartButton>
      </CardInfo>
    );
  }
}
