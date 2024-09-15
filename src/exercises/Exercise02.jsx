//Crie uma aplicação React onde você adicione estilos inline a um componente usando o objeto style. Estilize um botão que mude sua cor ao ser clicado.
// src/exercises/Exercise02.js
import React, {useState} from "react";

const Exercise02 = () => {
  const [click, set] = useState(false)
  return (
    <div>
      <button
        onClick={()=>set(!click)} 
        style={{
          ...buttonStyle,
          backgroundColor: click? "#ff6060": "#6060ff",
          padding: click? "12px": "15px",
          transitionTimingFunction: 'ease-in-out',
          transitionDuration: '0.1s'
        }}>
          CLICK ME
        </button>
    </div>
  );
};

export default Exercise02;


const buttonStyle = {
  backgroundColor: "#0000ff",
  border: 'none',
  borderRadius: "2px", 
  //padding: "15px",
  textAlign: 'center',
  fontWeight:'1000',
  fontFamily: 'Helvetica',
  color:"#fff"
}