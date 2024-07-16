import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ContentCarousel from './contentCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function carouselType() {
    return (
        <Carousel>
            <Carousel.Item >
                <a href="https://comunica.ufu.br/noticias/2024/06/unidade-embrapii-femec-ufu-e-senai-uberlandia-iniciam-colaboracao" target='blank'>
                    <img src="https://comunica.ufu.br/sites/default/files/imagem-chamada/2024-06/foto1.jpeg" alt="" />
                </a>

                <Carousel.Caption className='caption'>
                    <ContentCarousel title="Unidade Embrapii Femec UFU e Senai Uberlândia iniciam colaboraçãos " />
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item >
                <a href="https://comunica.ufu.br/noticias/2024/06/unidade-femec-ufu-recebe-classificacao-ouro-da-embrapii" target='_blank'>
                    <img src="https://comunica.ufu.br/sites/default/files/imagem-chamada/2024-06/galpao-embrapii.png" alt="" />
                </a>
                <Carousel.Caption className='caption'>
                    <ContentCarousel title="Unidade Femec UFU recebe classificação ouro da Embrapii" />
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item >
                    <a href="https://comunica.ufu.br/noticias/2024/04/presidente-da-fapemig-visita-laboratorios-da-ufu-e-conversa-com-pesquisadores" target='_blank'>
                    <img src="https://comunica.ufu.br/sites/default/files/imagem-chamada/2024-04/20240410_141431%20%281%29.jpg" alt="" />
                    </a>
                <Carousel.Caption className='caption'>
                    <ContentCarousel title="Embrapii com novos projetos" />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                    <a href="https://comunica.ufu.br/noticias/2024/05/projeto-de-extensao-promove-jornada-de-ciencia-aberta-na-pratica" target='_blank'>
                    <img src="https://comunica.ufu.br/sites/default/files/imagem-chamada/2024-05/image1_0.jpg" alt="" />
                    </a>
                <Carousel.Caption className='caption'>
                    <ContentCarousel title="Projeto de extensão promove jornada de ciência aberta na práticas" />
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default carouselType;    
