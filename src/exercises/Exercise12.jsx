//Crie uma aplicação React que receba um array de objetos produtos, onde cada objeto possui as propriedades nome, preco e disponivel (um booleano indicando se o produto está disponível ou não). Utilize um componente Produto para renderizar a lista de produtos.
// src/exercises/Exercise12.js
import React from "react";
import {products} from '../data.js'

const Exercise12 = () => {
  return (
    <div style={{justifySelf:"stretch"}}>
      <h1>Exercise 12</h1>
      <div style={{display:'flex', flexDirection:'column', padding:'10px'}}>
        {
          products.map(p => ( <Produto data={p} />))
        }
      </div>
    </div>
  );
};
const Produto = (props) => {
  return(
      <div className="profile" style={pStyle}>
        <label>Nome</label>
        <label>Preço</label>
        <label>{ props.data.disponivel? "": "Indisponivel"}</label>
        <span>{props.data.nome}</span>
        <span>{props.data.preco}</span>
        <span> </span>
      </div>
  )
}

const pStyle={
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 3fr',
  columnGap: '20px'
}

export default Exercise12;
