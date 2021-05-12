import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background: #2e3836;
  padding: 10px;
  width: 200px;
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  color: white;
  align-items: center;
  height: 400px;
  margin-left: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 95%;
    margin: 2.5%;
  }
`;
const FiltroTitle = styled.h2`
  margin: auto;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 3px;
`;

const Botao = styled.button`
  text-align: center;
  padding: 5px;
  margin: 3px;
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

export default class Filtro extends React.Component {
  state = {
    minValueInput: "",
    maxValueInput: "",
    nameInput: "",
  };

  minInputHandle = (event) => {
    this.setState({ minValueInput: event.target.value });
  };
  maxInputHandle = (event) => {
    this.setState({ maxValueInput: event.target.value });
  };
  nameInputHandle = (event) => {
    this.setState({ nameInput: event.target.value });
  };

  filter = () => {
    this.props.filteredProducts(
      this.state.minValueInput,
      this.state.maxValueInput,
      this.state.nameInput
    );
  };

  cleanFilter = () => {
    this.setState({
      minValueInput: "",
      maxValueInput: "",
      nameInput: "",
    });
    this.props.filteredProducts("", "", "");
  };

  render() {
    return (
      <MainContainer>
        <FiltroTitle>Filtros</FiltroTitle>
        <label class="valor-minimo">
          <p>Valor Mínimo:</p>
          <input
            onChange={this.minInputHandle}
            value={this.state.minValueInput}
            type="number"
          />
        </label>

        <label class="valor-maximo">
          <p>Valor Máximo:</p>
          <input
            onChange={this.maxInputHandle}
            value={this.state.maxValueInput}
            type="number"
          />
        </label>

        <label class="valor-minimo">
          <p>Busca por nome:</p>
          <input
            onChange={this.nameInputHandle}
            value={this.state.nameInput}
            type="text"
          />
        </label>
        <Botao onClick={this.cleanFilter}>Limpar Filtros</Botao>
        <Botao onClick={this.filter}>Filtrar</Botao>
      </MainContainer>
    );
  }
}
