import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'

import Extensao from './components/outlet/extensao.jsx'
import Projetos from './components/outlet/projetos.jsx'
import Parcerias from './components/outlet/parcerias.jsx'
const Routing  = ()=>{
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="extensao" element={<Extensao/>}/>
          <Route path="projetos" element={<Projetos/>}/>
          <Route path="parcerias" element={<Parcerias/>}/>
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
