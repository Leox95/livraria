import './estiloDetalhes.css'
import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import firebase from '../firebaseConnection'
import { fireEvent } from '@testing-library/react'

export default function Detalhes(){
const [detalhes, setDetalhes] = useState([])
const {id} = useParams()
const [nome, setNome] = useState()
const [img, setImg] = useState()
const [descricao, setDescricao] = useState()

useEffect(() => {
    async function buscaDetalhes(){
        await firebase.firestore().collection('livraria').doc(id)
        .get()
        .then((snapshot)=>{
            setNome(snapshot.data().nome)
            setImg(snapshot.data().img)
            setDescricao(snapshot.data().descricao)
        })}
        buscaDetalhes()
},[])
  


    return(
        <div className='fundo'>
        <article className="caixaLivros">
        <img className="imgDetalhes" src={img} />
        <h3>{nome}</h3>
        <p> {descricao}</p>
        <div className="botoes">
            <Link className='voltar' to='/'>Voltar</Link>
            <a target="_blank" href={`https://youtube.com/results?search_query=${nome} resenha`}>
                <button className="resenha">Resenha</button>
            </a>
        </div>
    </article>
    </div>
    )
}