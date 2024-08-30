import React from "react"


// component para textos
export const TextArticles= ({ text , classtype}) => {
  return (
    <p className={classtype}>{text}</p>
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
export const NotesTitles = (props) => {
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
//composição estatica layout esquerdo com lista de links = routers 
//recebe como parametro notes = notas de rodape / links = lista de link
export const Static_compose = ({ links }) => {
  return (
    <div className='main-list-ld'>
      <div className='logo-main-list-ld'>
        <a href=""><img src="./src/images/outlet/Logo UE Horizontal.png" alt="" /></a>
      </div>
      {links}
      
    </div>
  )
}


//Renderizador de boxes //pode ser melhorado

export const RenderList = ({object, classType})=> {
  const list =  object.map((item, key)=> <li key={key}>{item}</li>)
  return(<ul className={classType}>{list}</ul>)
}
//renderiza logos
export const RenderImages =({object, width, height,classType,logoClass})=>{
  const logos = object.map((item, key)=><div className={logoClass}><a key={key} href={item.link}><img src={item.img} width={width} height={height}/></a></div> )
  return(<div className={classType} >{logos}</div>)
}



