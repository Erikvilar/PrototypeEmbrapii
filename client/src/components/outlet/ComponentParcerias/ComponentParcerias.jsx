import css from "./ComponentParcerias.module.css";
import { TextArticles, NotesTitles, RenderImages,Articles,Links } from "./index";
const ComponentParcerias = () => {
  return (
    <section  id="parcerias" className={css.ComponentParcerias}>
    <NotesTitles title="Nossos Parceiros" class_style="notes_title"/>
    <TextArticles text={Articles.ParceirosParagrafos[0]} classtype="textArticle"/>
    <TextArticles text={Articles.ParceirosParagrafos[1]} classtype="textArticle"/>
    <TextArticles text={Articles.ParceirosParagrafos[2]} classtype="textArticle"/>
    <TextArticles text={Articles.ParceirosParagrafos[3]} classtype="textArticle"/>
    <NotesTitles title="Instituições que apoiam nossos projetos" class_style="notes_title_withBox"/>
    <RenderImages object={Links.ParceirosGovernamentais} width={100} height={100} classType={css.logoContent} logoClass={css.logos}/>
    <NotesTitles title="Empresas parceiras" class_style="notes_title_withBox"/>
    <RenderImages object={Links.ParceirosServicos} width={100} height={100}  classType={css.logoContent} logoClass={css.logos}/>
    <NotesTitles title="Ir para Vantagens" link="#vantagens" class_style="notes_title_baseboard" />
    </section>
  )
};
export default ComponentParcerias;
