import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'

import Unity_content from './components/outlet/unity_content.jsx'

const Routing  = ()=>{
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="/" element={<Unity_content/>}/>
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
