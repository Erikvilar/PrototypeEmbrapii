import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'

import Unity_content from './components/outlet/unity_content.jsx'
import  Institutional  from './components/outlet/institutional.jsx'
import Team from './components/outlet/team.jsx'
import Teste from './components/outlet/teste.jsx'

const Routing  = ()=>{
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="/" element={<Unity_content/>}/>
          <Route path="institucional" element={<Institutional/>}/>
          <Route path="equipe" element={<Team/>}/>
          <Route path="teste" element={<Teste/>}/>
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
