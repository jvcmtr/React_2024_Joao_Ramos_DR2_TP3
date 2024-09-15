//Crie uma aplicação React onde você utilize JSX para incluir um fragmento de código HTML que exiba uma lista de itens dinâmicos.
// src/exercises/Exercise04.js
import React from "react";

const Exercise04 = () => {
  return (
    <div>
      <h1>Exercise 04</h1>
      <Lista data={itens}/>
    </div>
  );
};

const Lista = (props) =>{
  let data = props.data || [];
  return(<ul>
    {data.map( i => (
      <li> {i} </li>
    ))}
  </ul>)
}

export default Exercise04;
const itens = [ //lista gerada utilizando inteligencia artificial
  "Chocolate",
  "Bolo de Chocolate",
  "Doce de Leite",
  "Brigadeiro",
  "Beijinho",
  "Pudim",
  "Tiramisu",
  "Macaron",
  "Maçã",
  "Picolé",
  "Pipoca Doce",
  "Queijadas de Sintra",
  "Pão de Ló",
  "Arroz Doce",
  "Toucinho do Céu",
  "Encharcada",
  "Ovos Moles",
  "Bolinhos de Amêndoa",
  "Rabanada"
]
