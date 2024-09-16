//Adicione uma funcionalidade para que os produtos esgotados não sejam exibidos na lista ao marcar uma checkbox "Mostrar apenas produtos disponíveis".
// src/exercises/Exercise14.js
import React from "react";


const Exercise14 = () => {
  const [show, set] = React.useState(true)
  console.log(show)
  return (
    <div style={{justifySelf:"stretch", alignSelf:'start'}}>
      <h1>Exercise 14</h1>
      <span>
      <input type='checkbox' onClick={e => set(e.target.checked)}/>
       Mostrar apenas produtos disponíveis
      </span>
      <div style={{display:'flex', flexDirection:'column', padding:'10px'}}>
        {
          show?
            products.map(p => ( <Produto data={p} />))
            : products.filter(p => p.disponivel).map(p => ( <Produto data={p} />))
        }
      </div>
    </div>
  );
};
export default Exercise14

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