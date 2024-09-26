import { NotesTitles } from '../ComponentEquipe';
import css from './ComponentNoticias.module.css'
import CarouselType from '../../reactBootstrap/carousel/carouselType';
import news from './news';
import ComponentSubNews from './ComponentSubNews';
const ComponentNoticias = () => {
	return (
		<section id="noticias" className={css.ComponentNoticias}>
		<NotesTitles title="Principais notícias" class_style="notes_title" />
		<CarouselType  classlType="carouselNoticias" object={news.CarouselNews} type={true}/> 
		<NotesTitles title="Acontece na unidade" class_style="notes_title" />
		<section className={css.ComponentSubNewsSection} >
		<ComponentSubNews object={news.SubNews}/>
		</section>
		<NotesTitles
        title={<>Veja mais notícias
        
        <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -860 360 1060" width="24px" fill="#2c66ce">
          
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></>}
        link="#institucional"
        class_style="notes_title_baseboard"
      />
		</section>
	)
}
export default ComponentNoticias;