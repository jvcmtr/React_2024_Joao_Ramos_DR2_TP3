//Crie uma aplicação React onde você receba um objeto produto com propriedades nome, preço e descrição, e renderize essas informações dentro de um componente Produto.
// src/exercises/Exercise05.js
import React from "react";
import { Card } from "./Exercise01";

const products = [ // dados gerados por inteligencia artificial
  {
      "nome": "Cadeira Ergonômica",
      "descrição": "Cadeira confortável com suporte lombar ajustável e apoio para os braços.",
      "preço": 299.99
  },
  {
      "nome": "Mouse Sem Fio",
      "descrição": "Mouse sem fio com ajuste de DPI e design ergonômico.",
      "preço": 79.90
  },
  {
      "nome": "Teclado Mecânico",
      "descrição": "Teclado mecânico com iluminação RGB e switches de alta durabilidade.",
      "preço": 149.99
  },
  {
      "nome": "Monitor 24\"",
      "descrição": "Monitor Full HD de 24 polegadas com tecnologia IPS e taxa de atualização de 75Hz.",
      "preço": 349.90
  },
  {
      "nome": "Smartphone X12",
      "descrição": "Smartphone com tela de 6.5\", 128GB de armazenamento e câmera de 48MP.",
      "preço": 899.00
  }
]



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
      text={props.data.description}
      >
      <span style={{color:"#303030"}}> {props.data.price} </span>
    </Card>
  )
}

export default Exercise05;
