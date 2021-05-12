import React from "react";
import styled from "styled-components";
import ProductsCard from "./ProductsCard.js";

const Elements = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  color: black;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  margin: 1% 2.5%;
  padding: 20px 0;
  background: white;
`;
const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  justify-content: space-around;
  margin-top: 20px;
`;

const Select = styled.div`
  float: right;
  text-align: right;

  select {
    width: 140px;
    height: 20px;
    background: #d8d8d8;


    border: 0;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    font-size: 11px;
  }
`;

export default class ProductsList extends React.Component {
  selectHandle = (event) => {
    if (event.target.value === "max") {
      console.log("estou no max");
      this.props.onChangeMax();
    } else if (event.target.value === "min") {
      console.log("estou no min");
      this.props.onChangeMin();
    }
  };

  componentDidMount() {
    this.props.onChangeMax();
  }

  render() {
    const products = this.props.products.map((p) => {
      return (
        <ProductsCard
          img={p.img}
          addProduct={this.props.addProduct}
          name={p.name}
          value={p.value}
        />
      );
    });
    return (
      <MainContainer>
        <Elements>
          Quantidade de produtos: {this.props.products.length}
          <Select>
            <select onChange={this.selectHandle}>
              <option value="max">Maior preço</option>
              <option value="min">Menor preço</option>
            </select>
          </Select>
        </Elements>

        <ProductContainer>{products}</ProductContainer>
      </MainContainer>
    );
  }
}
