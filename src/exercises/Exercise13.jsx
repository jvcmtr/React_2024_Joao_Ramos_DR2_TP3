//Renderize todos os produtos no componente Produto, mas estilize os produtos que não estão disponíveis (disponivel: false) com uma regra de estilos diferente, como por exemplo, uma cor de texto cinza e tachado, indicando que estão esgotados.
// src/exercises/Exercise13.js
import React from "react";


const Exercise13 = () => {
  return (
    <div style={{justifySelf:"stretch"}}>
      <h1>Exercise 13</h1>
      <div style={{display:'flex', flexDirection:'column', padding:'10px'}}>
        {
          products.map(p => ( <Produto data={p} />))
        }
      </div>
    </div>
  );
};
export default Exercise13
const Produto = (props) => {
  return(
      <div className="profile" style={pStyle(props.data.disponivel)}>
        <label>Nome</label>
        <label>Preço</label>
        <label>{ props.data.disponivel? "": "Indisponivel"}</label>
        <span>{props.data.nome}</span>
        <span>{props.data.preco}</span>
        <span> </span>
      </div>
  )
}

const pStyle=(available)=>{
  return{
    backgroundColor: available? "#fff" : "#ccc", 
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 3fr',
    columnGap: '20px'
  }
}

const products = [ // dados gerados por inteligencia artificial
  {
      "nome": "Cadeira Ergonômica",
      "descrição": "Cadeira confortável com suporte lombar ajustável e apoio para os braços.",
      "preco": 299.99,
      "disponivel": true
  },
  {
      "nome": "Mouse Sem Fio",
      "descrição": "Mouse sem fio com ajuste de DPI e design ergonômico.",
      "preco": 79.90,
      "disponivel": false
  },
  {
      "nome": "Teclado Mecânico",
      "descrição": "Teclado mecânico com iluminação RGB e switches de alta durabilidade.",
      "preco": 149.99,
      "disponivel": true
  },
  {
      "nome": "Monitor 24\"",
      "descrição": "Monitor Full HD de 24 polegadas com tecnologia IPS e taxa de atualização de 75Hz.",
      "preco": 349.90,
      "disponivel": true
  },
  {
      "nome": "Smartphone X12",
      "descrição": "Smartphone com tela de 6.5\", 128GB de armazenamento e câmera de 48MP.",
      "preco": 899.00,
      "disponivel": false
  }
]