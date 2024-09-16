//Crie uma aplicação React onde você receba um objeto produto com propriedades nome, preço e descrição, e renderize essas informações dentro de um componente Produto.
// src/exercises/Exercise05.js
import React from "react";
import { Card } from "./Exercise01";
import { products } from "../data";


const Exercise05 = () => {
  return (
    <div style={{justifySelf:"stretch"}}>
      <h1>Exercise 05</h1>
      <div className="card_row">
        {
          products.map(p => ( <Product data={p} />))
        }
      </div>
    </div>
  );
};

const Product = (props) => {
  return(
    <Card  
      title={props.data.nome}
      text={props.data.descricao}
      >
      <span style={{color:"#303030"}}> R$ { Number(props.data.preco).toFixed(2)} </span>
    </Card>
  )
}

export default Exercise05;
