import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { ContentCarousel } from '../props/propsComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
function carouselType() {
    return (
        <Carousel>
            <Carousel.Item >
                <a href="https://comunica.ufu.br/noticias/2023/06/ltad-laboratorio-do-setor-metal-mecanica-da-ufu-completa-15-anos" target='blank'>
                    <img className='img-carousel-index' src="https://comunica.ufu.br/sites/comunica.ufu.br/files/conteudo/noticia/imagem_destaque_imagem_galeria_dsc_2609_0.jpg" alt="" />
                </a>

                <Carousel.Caption className='caption'>
                    <ContentCarousel title="LTAD, laboratório do setor metal-mecânica da UFU, completa 15 anos" />
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item >
                <a href="https://comunica.ufu.br/noticias/2024/06/comitiva-da-regiao-das-mineradoras-visita-laboratorio-da-unidade-embrapii-femec" target='_blank'>
                    <img className='img-carousel-index' src="https://comunica.ufu.br/sites/default/files/imagem-chamada/2024-06/foto-comitivabh-embrapii.jpeg" alt="" />
                </a>
                <Carousel.Caption className='caption'>
                    <ContentCarousel title="Comitiva da região das mineradoras visita laboratório da Unidade Embrapii Femec UFU" />
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item >
                    <a href="https://comunica.ufu.br/noticias/2023/04/pesquisadores-da-petrobras-fortalecem-parceria-com-laboratorio-da-ufu" target='_blank'>
                    <img className='img-carousel-index' src="https://comunica.ufu.br/sites/comunica.ufu.br/files/conteudo/noticia/imagem_destaque_dsc04007.jpg" alt="" />
                    </a>
                <Carousel.Caption className='caption'>
                    <ContentCarousel title="Pesquisadores da Petrobras fortalecem parceria com laboratório da UFU " />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                    <a href="https://comunica.ufu.br/noticias/2024/05/projeto-de-extensao-promove-jornada-de-ciencia-aberta-na-pratica" target='_blank'>
                    <img className='img-carousel-index' src="https://comunica.ufu.br/sites/default/files/imagem-chamada/2024-05/image1_0.jpg" alt="" />
                    </a>
                <Carousel.Caption className='caption'>
                    <ContentCarousel title="Projeto de extensão promove jornada de ciência aberta na práticas" />
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default carouselType;    
