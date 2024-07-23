import React from 'react'

import { Logos, Notes_titles } from '../../../props/props_main'
 const box3 = () => {
  return (
    <div>
    <Notes_titles title="Onde estamos?" class_style="notes_title" />
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.27348133292!2d-48.26051042404003!3d-18.91928530763436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445749f09503b%3A0x71082187c6ec53c!2sLTAD%20-%20Laborat%C3%B3rio%20de%20Tecnologia%20em%20Atrito%20e%20Desgaste!5e0!3m2!1spt-BR!2sbr!4v1721405928137!5m2!1spt-BR!2sbr" width="712" height="450"></iframe>


    <div className="logos_to">

      <Logos link="https://www.youtube.com/?app=desktop&hl=pt"
        img="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" />

      <Logos link="https://www.instagram.com/"
        img="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" />


      <Logos link="https://www.linkedin.com/"
        img="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw" />

      <Logos link="mailto:lcontato@ltad.com.br"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vtphMtxRWfK6nO2CIbGfSETyEs79Dr6oPw&s" />
    </div>
    <p>Av. João Naves de Ávila, 2121 - Bairro Santa Mônica - Bloco 5F - CEP: CEP 38400-902</p>

    {/* Transaformar em component */}
    <div className="anchor">
      <p><a href="#">&#9652; Volta ao topo</a></p>
    </div>





  </div>

  )
}
export default box3