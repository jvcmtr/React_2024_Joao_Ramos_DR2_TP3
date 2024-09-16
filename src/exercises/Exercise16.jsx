//Crie uma aplicação React que combine componentes Cabeçalho, Conteudo, Menu e Rodape em uma única página.
// src/exercises/Exercise16.js
import React from "react";
import Exercise01 from "./Exercise01.jsx";
import Exercise02 from "./Exercise02.jsx";
import Exercise03 from "./Exercise03.jsx";
import Exercise04 from "./Exercise04.jsx";
import Exercise05 from "./Exercise05.jsx";
import Exercise06 from "./Exercise06.jsx";
import Exercise07 from "./Exercise07.jsx";
import Exercise08 from "./Exercise08.jsx";
import Exercise09 from "./Exercise09.jsx";
import Exercise10 from "./Exercise10.jsx";
import Exercise11 from "./Exercise11.jsx";
import Exercise12 from "./Exercise12.jsx";
import Exercise13 from "./Exercise13.jsx";
import Exercise14 from "./Exercise14.jsx";
import Exercise15 from "./Exercise15.jsx";

const exercises = [
   <Exercise01 />,  
  <Exercise02 />,  
  <Exercise03 />,  
  <Exercise04 />,  
  <Exercise05 />,  
  <Exercise06 />,  
  <Exercise07 />,  
  <Exercise08 />,  
  <Exercise09 />,  
  <Exercise10 />,  
  <Exercise11 />,  
  <Exercise12 />,  
  <Exercise13 />,  
  <Exercise14 />,  
  <Exercise15 />,  
]

const Exercise16 = () => {
  const [state, set] = React.useState(15)
  return (
    <div className="layout">
      <header>
        <h1> EXERCICIO {state} </h1>
      </header>
      <main style={{display:'flex', flexDirection:'row', justifyContent:"start", backgroundImage:'none', backgroundColor:"#eee"}}>
          <menu style={menuStyle}>
            {
              exercises.map((value, i) => (
                <p onClick={(e) => set(i)}> Exercicio {i+1}</p>
              ))
            }
          </menu>
          <div style={{padding:'5px'}}>
            { exercises[state] }
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
export default Exercise16;

const menuStyle ={
  padding:'3px',
  flexShrink:'0',
  width:'150px',
  height:'100%',
  backgroundColor: "#404040",
  fontSize: 'small',
  color:'#fff'
}