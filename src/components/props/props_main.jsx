
// component para textos
export const Text_to_principal = ({text1, text2, text3})=> {
    return (
      <div className='text_principal'>
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>    
      </div>
    )
  }
 
//component de notas de rodape
export const Notes_titles = (props) => {
  return (
    <div className={props.class_style}>
      <h1>{props.title}</h1>
    </div>
  )
}

//este component por meio de parametro adquire um outro component e a props
export const Box_team = ({component, name, link, email,lattes,linkLattes},props)=>{
 return (
    <div className='box_team'>
      {component}
      <p className="person_name">{name}</p>
      <p className="person_email">
        <a href={link}>{email}</a>
      </p>
      <p className="person_lattes">
        <a href={linkLattes}>{lattes}</a>
      </p>
        </div>
 )
}

//component de display do carrousel
export const ContentCarousel =(props)=> {
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
            <a href={props.link} target= "_blank"><img src={props.img} alt=""  width={18} /></a>
        </div>
  )
}

//composição estatica layout esquerdo com lista de links = routers 
//recebe como parametro notes = notas de rodape / links = lista de link
export const Static_compose = ({links}) => {
  return (
    <div className='static_compose'>
    <div className='logo_static_compose'>
      <a href=""><img src="https://github.com/Erikvilar/PrototypeEmbrapii/blob/main/src/images/icons/logo%20oficial%20horizontal.jpg?raw=true" alt="" /></a>
    </div>
    {links}
</div>
  )
}


  
