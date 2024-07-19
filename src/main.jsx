import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'

import Unidade from './components/outlet/unidade.jsx'
import Projetos from './components/outlet/projetos.jsx'
import Parcerias from './components/outlet/parcerias.jsx'
import  Institucional  from './components/outlet/institucional.jsx'
import Teste from './components/outlet/teste.jsx'
const Routing  = ()=>{
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="/" element={<Unidade/>}/>
          <Route path="teste" element={<Teste/>}/>
          <Route path="projetos" element={<Projetos/>}/>
          <Route path="parcerias" element={<Parcerias/>}/>
          <Route path="institucional" element={<Institucional/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<Routing/>

  </React.StrictMode>,
)
