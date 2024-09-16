//Renderize todos os produtos no componente Produto, mas estilize os produtos que não estão disponíveis (disponivel: false) com uma regra de estilos diferente, como por exemplo, uma cor de texto cinza e tachado, indicando que estão esgotados.
// src/exercises/Exercise13.js
import React from "react";
import {products} from '../data.js'


const Exercise13 = () => {
  return (
    <div style={{justifySelf:"stretch"}}>
      <h1>Exercise 13</h1>
      <div style={{display:'flex', flexDirection:'column', padding:'10px'}}>
        {
          products.map(p => ( <Produto data={p} />))
        }
      </div>
    </div>
  );
};
export default Exercise13
const Produto = (props) => {
  return(
      <div className="profile" style={pStyle(props.data.disponivel)}>
        <label>Nome</label>
        <label>Preço</label>
        <label>{ props.data.disponivel? "": "Indisponivel"}</label>
        <span>{props.data.nome}</span>
        <span>{props.data.preco}</span>
        <span> </span>
      </div>
  )
}

const pStyle=(available)=>{
  return{
    backgroundColor: available? "#fff" : "#ccc", 
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 3fr',
    columnGap: '20px'
  }
}