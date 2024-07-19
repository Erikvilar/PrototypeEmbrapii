import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function testeCarousel() {
    return (
        <Carousel slide={false} >
            
            <Carousel.Item className='content-teste'>
                    <img src="https://github.com/Erikvilar/PrototypeEmbrapii/blob/main/src/teste/Imagem10.png?raw=true" alt=""width={100} />
                <Carousel.Caption className='caption'>
                    <h2>Peça 1</h2>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='content-teste' >
                
                    <img src="https://github.com/Erikvilar/PrototypeEmbrapii/blob/main/src/teste/Imagem11.png?raw=true" alt="" />
           
                <Carousel.Caption className='caption'>
                <h2>Peça 2</h2>
                      </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='content-teste' >
                    
                    <img className='' src="https://github.com/Erikvilar/PrototypeEmbrapii/blob/main/src/teste/Imagem12.png?raw=true" alt="" />

                <Carousel.Caption className='caption'>
                <h2>Peça 3</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  className='content-teste' >
                   
                    <img src="https://github.com/Erikvilar/PrototypeEmbrapii/blob/main/src/teste/Imagem8.png?raw=true" alt="" />
               
                <Carousel.Caption className='caption'>
                <h2>Peça 4</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default testeCarousel 
