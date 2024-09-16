//Crie uma aplicação React que utilize JSX para incluir um componente Tabela que renderize uma tabela HTML com dados dinâmicos fornecidos por um array de objetos.
// src/exercises/Exercise15.js
import React from "react";
import {products} from '../data.js'

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
    <table style={{border: '1px solid #404040'}}>
      <thead>
        <th>id</th>
        <th>Nome</th>
        <th>Descrição</th>
        <th>Preço</th>
        <th>Disponivel</th>
      </thead>
      {
        props.data.map( (product, id) =>{
          return( 
            <tr>
              <td style={cellStyle(id)}>{id}</td>
              <td style={cellStyle(id)}>{product.nome}</td>
              <td style={cellStyle(id)}>{product.descricao}</td>
              <td style={cellStyle(id)}>{product.preco}</td>
              <td style={cellStyle(id)}>{product.disponivel? "✔" : "🗙"}</td>
            </tr>
          )
        })
      }
    </table>
  )
}

const cellStyle = (id) => {
  return {
    backgroundColor: (id%2==0)? "#fff":"#ddd",
    border: '1px solid #ddd',
    padding: '5px',
    textAlign: 'center'
  }
}