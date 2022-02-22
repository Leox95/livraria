import './estiloCadastrar.css'
import { useState } from 'react'
import React from 'react'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import {Link} from 'react-router-dom'
import firebase from '../firebaseConnection'

function Cadastrar(){
    const [nome, setNome] = useState([''])
    const [email, setEmail] = useState([''])
    const [senha, setSenha] = useState([''])
 

  async function novoUsuario(){
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(()=>{
      alert('cadastrado com sucesso')
    })
    .catch((error)=>{
      if(error.code === 'auth/weak-password'){
        alert('Senha muito fraca.')
      }else if(error.code === 'auth/email-already-in-use'){
        alert('Email já cadastrado')
      }else if(error.code === 'auth/invalid-email'){
        alert('Email não existe')
      }
    })
  }



  return(
    <div className='cadastro'>
      <div className='caixa'>
                    
                    <h1>Cadastrar</h1>
                    <form >
                        <TextField value={nome} onChange={(e) => setNome(e.target.value)}
                            id="nome" label="Nome" variant="filled" />
                        <br />
                        <TextField value={email} onChange={(e) => setEmail(e.target.value)}
                            id="email" label="E-mail" variant="filled" />
                        <br />
                        <TextField type="password" value={senha} onChange={(e) => setSenha(e.target.value)}
                            id="senha" label="Senha" variant="filled" />
                        <br/>
                        <Button onClick={novoUsuario} className="cadastrando" variant="contained" color="primary">Cadastrar</Button>
                        <br/>
                        <Link className='japossui' to="/">Já possui uma conta? Entre</Link>     
                    </form>
            
            </div>
    </div>
  )
}

export default Cadastrar