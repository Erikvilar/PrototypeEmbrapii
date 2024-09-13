import { NotesTitles } from '../ComponentEquipe';
import BoxProjetos from './BoxProjetos';
import scss from './ComponentProjetos.module.scss'
const ComponentProjetos = () => {
	return (
		<section id="projetos" className={scss.ComponentProjetos}>
			<NotesTitles title="Projetos" class_style="notes_title"/>
			
			<BoxProjetos/>
	
		</section>
	)
}
export default ComponentProjetos;