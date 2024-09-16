//Crie uma aplicação React onde você receba um objeto usuario com propriedades nome, email e endereço, e renderize essas informações dentro de um componente Perfil.
// src/exercises/Exercise06.js
import React from "react";
import { Card } from "./Exercise01";
import { displayPartsToString } from "typescript";
import { usuarios } from "../data";


const Exercise06 = () => {
  return (
    <div style={{justifySelf:"stretch"}}>
      <h1>Exercise 06</h1>
      <div style={{display:'flex', flexDirection:'column', padding:'10px'}}>
        {
          usuarios.map(p => ( <Perfil data={p} />))
        }
      </div>
    </div>
  );
};
const Perfil = (props) => {
  return(
      <div className="profile" style={pStyle}>
        <label>Nome</label>
        <label>Email</label>
        <label>Endereço</label>
        <span>{props.data.name}</span>
        <span>{props.data.email}</span>
        <span>{props.data.address}</span>
      </div>
  )
}

const pStyle={
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 3fr',
  columnGap: '20px'
}
export default Exercise06;
