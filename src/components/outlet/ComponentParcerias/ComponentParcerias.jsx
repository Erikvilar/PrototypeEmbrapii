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
    <NotesTitles
        title={
          <>
           Saiba como ser nosso parceiro
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14px"
              viewBox="0 -860 360 1060"
              width="24px"
              fill="#2c66ce"
            >
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
          </>
        }
        link="#sejaparceiro"
        class_style="notes_title_baseboard"
      />

    </section>
  )
};
export default ComponentParcerias;
