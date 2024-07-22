import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ContentCarousel from './contentCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function carouselType() {
    return (
        <Carousel>
            <Carousel.Item >
                <a href="https://comunica.ufu.br/noticias/2024/06/exercito-brasileiro-busca-cooperacao-tecnologica-com-pesquisadores-da-ufu" target='blank'>
                    <img className='img-carousel-index' src="https://comunica.ufu.br/sites/default/files/imagem-chamada/2024-06/20240514_091431.jpg" alt="" />
                </a>

                <Carousel.Caption className='caption'>
                    <ContentCarousel title="Exército Brasileiro busca cooperação tecnológica com pesquisadores da UFU" />
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item >
                <a href="https://comunica.ufu.br/noticias/2024/06/unidade-femec-ufu-recebe-classificacao-ouro-da-embrapii" target='_blank'>
                    <img className='img-carousel-index' src="https://comunica.ufu.br/sites/default/files/imagem-chamada/2024-06/foto-comitivabh-embrapii.jpeg" alt="" />
                </a>
                <Carousel.Caption className='caption'>
                    <ContentCarousel title="Comitiva da região das mineradoras visita laboratório da Unidade Embrapii Femec UFU" />
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item >
                    <a href="https://comunica.ufu.br/noticias/2024/06/comitiva-da-regiao-das-mineradoras-visita-laboratorio-da-unidade-embrapii-femec" target='_blank'>
                    <img className='img-carousel-index' src="https://comunica.ufu.br/sites/default/files/imagem-chamada/2024-04/20240410_141431%20%281%29.jpg" alt="" />
                    </a>
                <Carousel.Caption className='caption'>
                    <ContentCarousel title="Embrapii com novos projetos" />
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
