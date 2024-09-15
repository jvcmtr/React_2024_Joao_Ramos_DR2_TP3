//Crie uma aplicação React que componha um componente Galeria a partir de múltiplos componentes Imagem, cada um renderizando uma imagem diferente.
// src/exercises/Exercise01.js
import React from "react";

const Exercise09 = () => {
  return (
    <div>
      <h1>Exercise 09</h1>
      <Galeria>
        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2373630/header.jpg"/>
        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2824490/header.jpg"/>
        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg"/>
        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/header.jpg"/>
        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2373630/header.jpg"/>
        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/header.jpg"/>
      </Galeria>
    </div>
  );
};

const Galeria = (props) =>{
  return(
    <div className="card_row">
    {props.children}
  </div>
  )
}

export default Exercise09