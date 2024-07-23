import React from 'react'
import { Notes_titles } from '../../../props/props_main'
 const box2= () => {
  return (
    <div>
    <Notes_titles title="Responsavel" class_style="notes_title"/>
    <p><b>Coordenador da unidade</b></p>
    <p>Louriel Oliveira Vilarinho</p>
    <p>Cargo: Professor Titular - Dedicação Exclusiva</p>
    <p>Email: <a href="mailto:vilarinho@ufu.br">vilarinho@ufu.br</a></p>
    <p><b>Unidade organizacional</b></p>
    <p><a href="https://www.femec.ufu.br/unidades/unidade-academica/faculdade-de-engenharia-mecanica">Faculdade de Engenharia Mecânica</a></p>
    <p><a href="https://embrapii.org.br/" target='_blank'>Embrapii</a></p>
    </div>
  )
}

export default box2
