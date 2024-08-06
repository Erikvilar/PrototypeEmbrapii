import React from "react"
import articles from "../texts"

// component para textos
export const TextArticles= ({ text }) => {
  return (
    <p className="textArticle">{text}</p>
  )
}


export const utilLinks =()=>{
  <>
  <hr />  
  <ul>
    <b>Links uteis:</b>
    <li><a href=""target="_blank"> • [WEBINAR] Fragilização por Hidrogênio em Metais</a></li>
  </ul>
  <hr />
  </>
}

//component de notas de rodape
export const Notes_titles = (props) => {
  return (
    <div className={props.class_style} id={props.id}>
      <h1><a href={props.link}>{props.title}</a></h1>
    </div>
  )
}



//component de display do carrousel
export const ContentCarousel = (props) => {
  return (
    <div className="displayCarousel">

      <h1>{props.title}</h1>

    </div>
  )
}

//icone refs para outros conteudos
export const Logos = (props) => {
  return (
    <div>
      <a href={props.link} target="_blank"><img src={props.img} alt="" width={18} /></a>
    </div>
  )
}

//composição estatica layout esquerdo com lista de links = routers 
//recebe como parametro notes = notas de rodape / links = lista de link
export const Static_compose = ({ links }) => {
  return (
    <div className='static_compose'>
      <div className='logo_static_compose'>
        <a href=""><img src="https://github.com/Erikvilar/PrototypeEmbrapii/blob/main/src/images/outlet/Logo%20UE%20Horizontal.png?raw=true" alt="" /></a>
      </div>
      {links}
    </div>
  )
}
export const Box_team = (props) => {
    return (<div className="box_team">
      <Notes_titles title={props.occupation} class_style="notes_title" />
      <ul>
        <li>{props.name}</li>
        <li>
          <img src="src/images/icons/emailicon.png" alt="" width={15} />
          <a href="" target="_blank" rel="noopener noreferrer">{""+props.link}</a>
          </li>
          <li>
          <img src="src/images/icons/telefoneicon.png" alt="" width={12} />
          <span>{props.phone}</span>
          </li>
      </ul>
     
    </div>
    )
}

export const RenderList = ({object, classType})=> {
  const list =  object.map((item, key)=> <li key={key}>{item}</li>)
  return(<ul className={classType}>{list}</ul>)
}

 



