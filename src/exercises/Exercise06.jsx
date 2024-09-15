//Crie uma aplicação React onde você receba um objeto usuario com propriedades nome, email e endereço, e renderize essas informações dentro de um componente Perfil.
// src/exercises/Exercise06.js
import React from "react";
import { Card } from "./Exercise01";
import { displayPartsToString } from "typescript";

const usuarios = [ //lista criada com auxilio de inteligencia artificial
  {
      "name": "Ana Silva",
      "email": "ana.silva@example.com",
      "address": "Rua das Flores, 123, Apto 45, São Paulo, SP, 01234-567"
  },
  {
      "name": "Carlos Oliveira",
      "email": "carlos.oliveira@example.com",
      "address": "Avenida Paulista, 456, Sala 789, São Paulo, SP, 01310-000"
  },
  {
      "name": "Maria Santos",
      "email": "maria.santos@example.com",
      "address": "Praça da Sé, 789, 6º Andar, São Paulo, SP, 01001-000"
  },
  {
      "name": "João Pereira",
      "email": "joao.pereira@example.com",
      "address": "Rua dos Pinheiros, 321, Casa 2, Rio de Janeiro, RJ, 22222-333"
  },
  {
      "name": "Luciana Costa",
      "email": "luciana.costa@example.com",
      "address": "Rua das Palmeiras, 987, Apto 10, Belo Horizonte, MG, 30123-456"
  }
]


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
  width: '80vw',
  padding: '15px',
  margin: '10px',
  boxShadow: '0 5px 9px 0 #00000040, 0 5px 20px 0 #00000020',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 3fr',
  columnGap: '20px'
}
export default Exercise06;
