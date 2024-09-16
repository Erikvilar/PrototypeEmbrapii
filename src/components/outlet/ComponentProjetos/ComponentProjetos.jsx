import { NotesTitles } from '../ComponentEquipe';
import BoxProjetos from './BoxProjetos';
import scss from './ComponentProjetos.module.scss'
const ComponentProjetos = () => {
	return (
		<section id="projetos" className={scss.ComponentProjetos}>
			<NotesTitles title="Projetos" class_style="notes_title"/>
			<p>
      Nossa unidade desenvolve diversos projetos com nossas empresas parceiras
      </p>
    <NotesTitles title="Confira nossos projetos" class_style="notes_title_withBox"/>
			<BoxProjetos/>
	
		</section>
	)
}
export default ComponentProjetos;