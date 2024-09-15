//Crie uma aplicação React utilizando JSX para renderizar um layout de página com um cabeçalho, uma área de conteúdo e um rodapé.
// src/exercises/Exercise03.js
import React from "react";
import { Card } from "./Exercise01";

const Exercise03 = () => {
  return (
    <div className="layout">
      <header>
        <h1> HEADER </h1>
      </header>
      <main>
          <div className="mini_card_container">
            <Card/><Card/><Card/>
          </div>
      </main>
      <footer> 
        <span></span> 
        <span>footer</span> 
        <span>----</span> 
        <span>description</span> 
        <span>----</span> 
        <span>footer</span> 
        <span></span>
        </footer>
    </div>
  );
};

export default Exercise03;
