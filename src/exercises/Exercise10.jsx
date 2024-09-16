//Crie uma aplicação React que componha um componente ListaDeTarefas a partir de múltiplos componentes Tarefa, onde cada tarefa exiba um nome e um status.
// src/exercises/Exercise01.js
import { useState } from "react";
import React  from "react";

const Exercise10 = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', padding:'10px', justifySelf:'stretch'}}>
      <h1>Exercise 10</h1>
      <Tarefa text={"Comprar ração "} checked />
      <Tarefa text={"Passear com cachorro"}  />
      <Tarefa text={"Fazer comida"}  />   
      <Tarefa text={"Fazer TP"} checked />
      <Tarefa text={"Fazer TPs atrasados"} checked />
    </div>
  );
};

const Tarefa = (props) =>{
  const v = props.checked || false;
  const [checked, setChecked] = useState(v)
  return(
    <div className="profile" style={getStyle(checked)} onClick={e => {e.preventDefault(); setChecked(!checked)}}>
      <input type='checkbox' onChange={e => setChecked(e.target.value)} checked={checked}></input>
      <span>{props.text}</span>
    </div>
  )
}

const getStyle = (checked) =>{
  return {
    backgroundColor: checked? "#60cc60" : "#ddd",
    padding: checked? "16px": "14px",
    display:'flex',
    gap: '15px',
    flexDirection: 'row',
    transitionDuration: '0.1s',
    transitionTimingFunction: 'ease-in'
  }
}

export default Exercise10;

