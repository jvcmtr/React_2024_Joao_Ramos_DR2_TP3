//Crie um componente React que receba propriedades (props) imagem, descricao, e link e renderize uma imagem clicável que direcione para o link fornecido.
// src/exercises/Exercise01.js
import React from "react";

const Exercise08 = () => {
  return (
    <div >
      <h1>Exercise 08</h1>
      <LinkImg
        img="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2373630/header.jpg"
        link='https://store.steampowered.com/app/2373630/Moonring/'
        description="Moonring - a rpg with rogue inspired graphics"
        />

    <LinkImg
        img="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2824490/header.jpg"
        link='https://store.steampowered.com/app/2824490/He_is_coming/'
        description="He is coming - roguelike survival rpg"
        />
    </div>
  );
};
export const LinkImg = (props)=>{
  return(
    <img 
      src={props.img} 
      onClick={()=> window.location.href = props.link} 
      alt={props.description}
      style={{margin:'10px'}}
      ></img>
  )
}

export default Exercise08;
