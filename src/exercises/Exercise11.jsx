//Crie uma aplicação React onde um componente Formulario passe os dados de um formulário preenchido para um componente Resumo, exibindo os valores submetidos.
// src/exercises/Exercise11.js
import React from "react";

const Exercise11 = () => {
  const [data, set] = React.useState({})  
  return (
    <div>
      <h1>Exercise 11</h1>
      {
        data.dateCreate? 
          <Resumo data={data} />
          :<AvaliacaoForm onSubmit={e => set(e)}/>
      }
    </div>
  );
};

export default Exercise11;

const AvaliacaoForm = (props) => {
  const handleSubmit = (e) =>{
    e.preventDefault()
    let obj = {
      dateCreate : new Date(Date.now()).toDateString()
    }
    for (let i = 0; i < e.target.length; i++) {
      let entry = e.target[i]
      obj[entry.name] = entry.value
    }

    console.log(obj )
    props.onSubmit(obj)
  }
  return(
    <form onSubmit={handleSubmit} style={{width:'400px'}}>

      <div style={styleInput}>
        <label>Nome : </label>
        <input type='text' name="name"/>
      </div>

      <div style={styleInput}>
        <label>Email : </label>
        <input type='text' name="email"/>
      </div>

      <div style={styleInput}>
        <label> De uma nota ao nosso serviço (0-10)</label>
        <input type='number' max={10} min={0} name='score'></input>
      </div>
      <div style={styleInput}>
        <label> O que achou dos nossos serviços</label>
        <textarea name='review' style={{width:'350px'}} />
      </div>
      <button type='submit'> Enviar </button>
    </form>
  )
}

const styleInput = {
  display: 'flex',
  color: '#404040',
  padding:'10px',
  flexDirection: 'column',
  alignItems: 'start'
}

const Resumo = (props) => {
  if(!props.data.dateCreate){
    return (<div></div>)
  }
  return (
    <div style={{display:'flex', flexDirection:"column"}}>
      <h2> Obrigado pelo seu Feedback</h2>
      <span><b>name : </b> {props.data.name}</span>
      <span><b>email : </b> {props.data.email}</span>
      <span><b>score : </b> {props.data.score}</span>
      <span><b>comment : </b> {props.data.review}</span>
      <span><b>data : </b>{props.data.dateCreate }</span>
    </div>
  )
}
