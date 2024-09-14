// Crie uma aplicação React onde você adicione estilos personalizados a um componente usando CSS externo.
// Crie um componente Card que possua classes para estilo e exiba uma informação básica, como nome e descrição.
// src/exercises/Exercise01.js
import React from "react";

const Exercise01 = () => {
  return (
    <div>
      lkdfjablfkjabçfjkbaçkfjnsçkjfnçkn
      <Card/>
    </div>
  );
};

function Card(props){
  return(
    <div className="my_card">
      <h2 className="my_card_title"> Title </h2>
      <p className="my_card_description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Dignissimos molestiae quos quidem aspernatur repudiandae nam eligendi corrupti totam, 
        soluta nostrum rerum magnam, voluptatum consequuntur ut laborum sunt accusantium provident optio!
      </p>
    </div>
  )
}

export default Exercise01;
