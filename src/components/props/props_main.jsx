
// component para textos
export const Text_to_principal = ({ text1, text2, text3 }) => {
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
        <a href=""><img src="./src/images/outlet/Logo UE Horizontal.png" alt="" /></a>
      </div>
      {links}
    </div>
  )
}
export const Box_team = () => {
  const InternList = (props) => {
    return <div className="box_team">

      <ul>
        <li>{props.name}</li>
        <li>{props.occupation}</li>
        <li><a href="http://" target="_blank" rel="noopener noreferrer">{props.link}</a></li>
      </ul>
      <ul>
        <li><a href="mailto:">{props.email}</a></li>
        <li>{props.fone}</li>
      </ul>
    </div>

  }
  return (
    <>
      <InternList name="Prof. Louriel O. Vilarinho" occupation="Coordenador da unidade Embrapii" email="louriel@ltad.ufu.br" fone="34 3291-8947" />
      <InternList name="Prof. Louriel O. Vilarinho" occupation="Coordenador da unidade Embrapii" email="louriel@ltad.ufu.br" fone="34 3291-8947" />
      <InternList name="Prof. Louriel O. Vilarinho" occupation="Coordenador da unidade Embrapii" email="louriel@ltad.ufu.br" fone="34 3291-8947" />
      <InternList name="Prof. Louriel O. Vilarinho" occupation="Coordenador da unidade Embrapii" email="louriel@ltad.ufu.br" fone="34 3291-8947" />
      <InternList name="Prof. Louriel O. Vilarinho" occupation="Coordenador da unidade Embrapii" email="louriel@ltad.ufu.br" fone="34 3291-8947" />
      <InternList name="Prof. Louriel O. Vilarinho" occupation="Coordenador da unidade Embrapii" email="louriel@ltad.ufu.br" fone="34 3291-8947" />
      <InternList name="Prof. Louriel O. Vilarinho" occupation="Coordenador da unidade Embrapii" email="louriel@ltad.ufu.br" fone="34 3291-8947" />
      <InternList name="Prof. Louriel O. Vilarinho" occupation="Coordenador da unidade Embrapii" email="louriel@ltad.ufu.br" fone="34 3291-8947" />
      <InternList name="Prof. Louriel O. Vilarinho" occupation="Coordenador da unidade Embrapii" email="louriel@ltad.ufu.br" fone="34 3291-8947" />
      <InternList name="Prof. Louriel O. Vilarinho" occupation="Coordenador da unidade Embrapii" email="louriel@ltad.ufu.br" fone="34 3291-8947" />
      <InternList name="Prof. Louriel O. Vilarinho" occupation="Coordenador da unidade Embrapii" email="louriel@ltad.ufu.br" fone="34 3291-8947" />
    </>


  )
}



