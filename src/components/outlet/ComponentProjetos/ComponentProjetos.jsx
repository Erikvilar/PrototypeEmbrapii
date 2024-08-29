import { NotesTitles } from '../ComponentEquipe';
import BoxProjetos from './BoxProjetos';
import css from './ComponentProjetos.module.css'
const ComponentProjetos = () => {
	return (
		<section id="projetos" className={css.ComponentProjetos}>
			<NotesTitles title="Projetos" class_style="notes_title"/>
			<BoxProjetos/>
			<NotesTitles title="Em construção" class_style="notes_title_withBox"/>
		</section>
	)
}
export default ComponentProjetos;