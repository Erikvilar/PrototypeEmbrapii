import App from './App.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Inicio, Institucional, Equipe, Parceiros, Vantagens, Infraestrutura } from './components/index.js'


const Routing  = () =>{
    return(
      <HashRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="/" element={<Inicio/>}/>
            <Route path="institucional" element={<Institucional/>}/>
            <Route path="equipe" element={<Equipe/>}/>  
            <Route path="parceiros" element={<Parceiros/>}/>
            <Route path="vantagens" element={<Vantagens/>}/>
            <Route path="infraestrutura" element={<Infraestrutura/>}/>
            
          </Route>
        </Routes>
      </HashRouter>
    )
  }
  export default Routing
  