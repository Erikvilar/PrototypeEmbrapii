import App from './App.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Inicio, Institucional, Equipe } from './components/index.js'


const Routing  = () =>{
    return(
      <HashRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="/" element={<Inicio/>}/>
            <Route path="institucional" element={<Institucional/>}/>
            <Route path="equipe" element={<Equipe/>}/>  
          </Route>
        </Routes>
      </HashRouter>
    )
  }
  export default Routing
  