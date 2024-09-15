// Crie uma aplicação React onde você adicione estilos personalizados a um componente usando CSS externo.
// Crie um componente Card que possua classes para estilo e exiba uma informação básica, como nome e descrição.
// src/exercises/Exercise01.js
import React from "react";

const Exercise01 = () => {
  return (
    <div className="card_row">
      <Card title="Nome" text="Descrição"/>
      <Card/>
    </div>
  );
};

export function Card(props){
  return(
    <div className="my_card">
      <h2> {props.title || "Title"} </h2>
      <p>
        {
        props.text || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos molestiae quos quidem aspernatur repudiandae nam eligendi corrupti totam, soluta nostrum rerum magnam, voluptatum consequuntur ut laborum sunt accusantium provident optio!"
        }
      </p>
      {props.children}
    </div>
  )
}

export default Exercise01;
