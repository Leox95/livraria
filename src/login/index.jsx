import './estiloLogin.css'
import { useState, useEffect } from 'react'
import React from 'react'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import Noz from './nozmarca.png'
import {Link, Navigate} from 'react-router-dom'
import firebase from '../firebaseConnection'
import Livro from '../livro/index'

function Entrar() {


    const [email, setEmail] = useState([''])
    const [senha, setSenha] = useState([''])
    const [logado, setLogado] = useState(false)

    useEffect(()=>{
        async function checkLogin(){
            await firebase.auth().onAuthStateChanged((user)=>{
                if(user){
                    setLogado(true)
                }else{
                    setLogado(false)
                }

            })
        }
        checkLogin()
    },[])
    
    
    
    
    async function Login(e){
        await firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(()=>{
            <Navigate to='/livro'/>
            alert('Logado com Sucesso')
        })
        .catch(()=>{
            <Navigate to='/livro'/>
        })
        
    }



        if(logado){
            return(
            <Navigate to='/livro'/>
            )
        }else{ 
        return (
        <div className="entrar">

            <div className='caixa'>
                    <div className="marca">
                        <img src={Noz} />
                        <a>Books</a>
                    </div>
                    <form  >
                        <TextField value={email} onChange={(e) => setEmail(e.target.value)}
                            id="email" label="E-mail" variant="filled" />
                        <br />
                        <TextField type="password" value={senha} onChange={(e) => setSenha(e.target.value)}
                            id="senha" label="Senha" variant="filled" />
                        <br />
                        <Button onClick={Login} variant="contained" color="primary">Entrar</Button>
                        <Button variant="contained" color="primary">
                        <Link className="btncadastro"to="/cadastrar">Cadastrar</Link>
                        </Button>
                    </form>
            
            </div>

        </div>
    )}
}

export default Entrar;