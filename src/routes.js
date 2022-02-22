import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Entrar from './login'
import Cadastrar from './cadastrar'
import Livro from "./livro";
import Detalhes from './detallhes'

const Rotas = () => {
    return(
      
        <Router>
            <Routes>
                <Route exact path="/" element={<Entrar/>}></Route>
                <Route exact path="/livro" element={<Livro/>}></Route>
                <Route exact path="/detalhes/:id" element={<Detalhes/>}></Route>
                <Route exact path="/cadastrar" element={<Cadastrar/>}></Route>
            </Routes>
        </Router>
    )
}

export default Rotas;