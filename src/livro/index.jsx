import firebase from '../firebaseConnection'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './estiloLivro.css'

function Livro() {
    const [livros, setLivros] = useState([])
    const [intensPorPagina, setItensPorPagina] = useState(12)
    const [paginaAtual, setPaginaAtual] = useState(0)


    const pages = Math.ceil(livros.length/intensPorPagina)
    const startIndex = paginaAtual * intensPorPagina
    const endIndex = startIndex + intensPorPagina
    const currentIndex = livros.slice(startIndex, endIndex)


    async function logout() {
        await firebase.auth().signOut()
            .then(() => {
                alert('Você efetuou lougout aperte sair para voltar ao Login')
            })

    }


    useEffect(() => {
        async function loadLivros() {
            await firebase.firestore().collection('livraria')
                .onSnapshot((doc) => {
                    let meusLivros = []
                    doc.forEach((item) => {
                        meusLivros.push({
                            id: item.id,
                            nome: item.data().nome,
                            autor: item.data().autor,
                            editora: item.data().editora,
                            img: item.data().img
                        })
                    })
                    setLivros(meusLivros)
                })
        }
        loadLivros()
    }, [])




    return (
        <div className='geral'>
            <div className="menu"> 
                <a>Livros</a>
                <div>
                <Link className='sair' to="/">Sair</Link>
                <button className='logout' onClick={logout}>logout</button>
                </div>
            </div>
            <div className="App">
                <ul>
                    {currentIndex.map((item) => {
                        return (
                            <li key={item.id}>
                                <div className='card'>
                                    <img className='imgCard' src={item.img} />
                                    <div className='descricao'>
                                    <span className='nome'>Nome: {item.nome}</span>
                                    <br/>
                                    <span className='autor'>Autor: {item.autor}</span>
                                    <br/>
                                    <span className='editora'>Editora: {item.editora}</span>
                                    <br/>
                                    <Link className='saibaMais' to={`/detalhes/${item.id}`}>Saiba Mais</Link>
                                    </div>
                                </div>
                                <br />
                                <br />
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div >
                    {Array.from(Array(pages), (livro, index)=>{
                        return(
                            <button className="paginas" value={index} onClick={(e)=>setPaginaAtual(Number(e.target.value))}>{index + 1}</button>
                        )
                    })}
            </div>
        </div>
    )
}
export default Livro