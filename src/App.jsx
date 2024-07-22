

import Header from './components/header.jsx';
import Main from './components/main.jsx';
import Footer from './components/footer/footer.jsx';


import "/src/styles/styles_main/principal_layout.scss"
import "/src/styles/styles_main/contents_embrapii.scss"
import "/src/styles/styles_main/dynamic_layout.scss"
import "/src/styles/styles_main/static_compose.scss"

import "/src/styles/styles_footer/footer.scss"



function App() {
  return (
    <div className='general-content'>
      <Header />
      <Main/>
      <Footer 
      link1="Conheça"
      link2="Marca UFU"
      link3="Campi"
      link4="Mobilidade"
      link5="Bibliotecas"
      link6="Restaurantes"
      link7="Editora"
      link8="Hospital de clinicas"
      link9="Fundações"
      
      
      />

   
    </div>
 
  );


}

export default App
