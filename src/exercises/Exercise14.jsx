//Adicione uma funcionalidade para que os produtos esgotados não sejam exibidos na lista ao marcar uma checkbox "Mostrar apenas produtos disponíveis".
// src/exercises/Exercise14.js
import React from "react";
import {products} from '../data.js'


const Exercise14 = () => {
  const [show, set] = React.useState(true)
  console.log(show)
  return (
    <div style={{justifySelf:"stretch", alignSelf:'start'}}>
      <h1>Exercise 14</h1>
      <span>
      <input type='checkbox' onClick={e => set(e.target.checked)}/>
       Mostrar apenas produtos disponíveis
      </span>
      <div style={{display:'flex', flexDirection:'column', padding:'10px'}}>
        {
          show?
            products.map(p => ( <Produto data={p} />))
            : products.filter(p => p.disponivel).map(p => ( <Produto data={p} />))
        }
      </div>
    </div>
  );
};
export default Exercise14

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