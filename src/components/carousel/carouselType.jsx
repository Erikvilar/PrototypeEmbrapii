import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function carouselType() {
    return (
        <Carousel>
            <Carousel.Item interval={800}>
                <img src="https://tratamentodeagua.com.br/wp-content/uploads/2024/06/Embrapii-investe-em-projetos-sustentaveis-e-inovadores-para-protecao-dos-recursos-naturais.jpg" alt="" />
                <Carousel.Caption>
                  <h1>Conheça nossos equipamentos</h1>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={800}>
            <img src="https://comunica.ufu.br/sites/default/files/styles/full_hd_3_colunas/public/imagem-chamada/2023-10/LTAD%20UFU%20fachada.png?itok=xnI-00xi" alt="" />
                <Carousel.Caption>
                 <h1>Nos somos bons nisso</h1>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item interval={800}>

            <img src="https://comunica.ufu.br/sites/comunica.ufu.br/files/conteudo/noticia/imagem_destaque_dsc03904.jpg" alt="" />
            <Carousel.Caption>
                 <h1>Nos somos bons nisso</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default carouselType
