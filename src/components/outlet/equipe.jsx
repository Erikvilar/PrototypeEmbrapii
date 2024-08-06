import React from 'react'
import {  Notes_titles, Box_team } from '../props/propsComponents'


const equipe = () => {
  return (
    <React.Fragment className="dynamic_layout">
      <Notes_titles title="Equipe" class_style="notes_title" />


   
      <div className='box_team_aligner'>
        <div>
          <Box_team occupation="Coordenador da unidade" name="Prof. Dr. Louriel Vilarinho" link="vilarinho@ufu.br" phone="(34) 3239-4380" />
          <Box_team occupation="Coordenador da unidade" name="Erik Alves vilar" link="erikvilaralves@gmail.com" phone="(34) 992485123"/>
          <Box_team occupation="Coordenador da unidade" name="Erik Alves vilar" link="erikvilaralves@gmail.com" phone="(34) 992485123"/>
        </div>
        <div>
        <Box_team occupation="Coordenador da unidade" name="Erik Alves vilar" link="erikvilaralves@gmail.com" phone="(34) 992485123"/>
        <Box_team occupation="Coordenador da unidade" name="Erik Alves vilar" link="erikvilaralves@gmail.com" phone="(34) 992485123"/>
        <Box_team occupation="Coordenador da unidade" name="Erik Alves vilar" link="erikvilaralves@gmail.com" phone="(34) 992485123"/>
        </div>
        <div>
        <Box_team occupation="Coordenador da unidade" name="Erik Alves vilar" link="erikvilaralves@gmail.com" phone="(34) 992485123"/>
        <Box_team occupation="Coordenador da unidade" name="Erik Alves vilar" link="erikvilaralves@gmail.com" phone="(34) 992485123"/>
        <Box_team occupation="Coordenador da unidade" name="Erik Alves vilar" link="erikvilaralves@gmail.com" phone="(34) 992485123"/>
        </div>
        <div>
        <Box_team occupation="Coordenador da unidade" name="Erik Alves vilar" link="erikvilaralves@gmail.com" phone="(34) 992485123"/>
        <Box_team occupation="Coordenador da unidade" name="Erik Alves vilar" link="erikvilaralves@gmail.com" phone="(34) 992485123"/>
        <Box_team occupation="Coordenador da unidade" name="Erik Alves vilar" link="erikvilaralves@gmail.com" phone="(34) 992485123"/>
        </div>

      </div>





    </React.Fragment>
  )
}
export default equipe