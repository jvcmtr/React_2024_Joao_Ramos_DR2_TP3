//Crie um componente React que receba propriedades (props) titulo, subtitulo, e conteudo e renderize um cartão informativo com essas informações.
// src/exercises/Exercise01.js
import React from "react";

const Exercise07 = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', padding:'10px', gap:'20px'}}>
      <h1>Exercise 07</h1>
      <TitleCard titulo="TP3" subtitulo={'Exercicio 7'} conteudo={"Crie um componente React que receba propriedades (props) titulo, subtitulo, e conteudo e renderize um cartão informativo com essas informações."}/>
      <TitleCard titulo='Titulo' subtitulo='subtitulo' conteudo='Conteudo'/>
    </div>
  );
};

export function TitleCard({titulo, subtitulo, conteudo}){
  return(
    <div className="my_card">
      <h2> {titulo } </h2>
      <i> {subtitulo}</i>
      <p>
        {conteudo}
      </p>
    </div>
  )
}

export default Exercise07;
