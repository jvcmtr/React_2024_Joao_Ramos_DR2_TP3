//Crie uma aplicação React que utilize JSX para incluir um componente Tabela que renderize uma tabela HTML com dados dinâmicos fornecidos por um array de objetos.
// src/exercises/Exercise15.js
import React from "react";

const Exercise15 = () => {
  return (
    <div>
      <h1>Exercise 15</h1>
      <Table data={products}/>
    </div>
  );
};

export default Exercise15;

const Table = (props) => {
  return(
    <table>
      <tr>
        <th>Nome</th>
        <th>Descrição</th>
        <th>Preço</th>
        <th>Disponivel</th>
      </tr>
      {
        props.data.map( product =>{
          return( 
            <tr>
              <td>{product.nome}</td>
              <td>{product.descricao}</td>
              <td>{product.preco}</td>
              <td>{product.disponivel}</td>
            </tr>
          )
        })
      }
    </table>
  )
}

const products = [ // dados gerados por inteligencia artificial
  {
      "nome": "Cadeira Ergonômica",
      "descricao": "Cadeira confortável com suporte lombar ajustável e apoio para os braços.",
      "preco": 299.99,
      "disponivel": true
  },
  {
      "nome": "Mouse Sem Fio",
      "descricao": "Mouse sem fio com ajuste de DPI e design ergonômico.",
      "preco": 79.90,
      "disponivel": false
  },
  {
      "nome": "Teclado Mecânico",
      "descricao": "Teclado mecânico com iluminação RGB e switches de alta durabilidade.",
      "preco": 149.99,
      "disponivel": true
  },
  {
      "nome": "Monitor 24\"",
      "descricao": "Monitor Full HD de 24 polegadas com tecnologia IPS e taxa de atualização de 75Hz.",
      "preco": 349.90,
      "disponivel": true
  },
  {
      "nome": "Smartphone X12",
      "descricao": "Smartphone com tela de 6.5\", 128GB de armazenamento e câmera de 48MP.",
      "preco": 899.00,
      "disponivel": false
  }
]