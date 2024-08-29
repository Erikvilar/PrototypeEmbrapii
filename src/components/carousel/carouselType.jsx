import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { ContentCarousel } from '../props/propsComponents';

function carouselType({object, classlType,type}) {
    return (
        <Carousel fade={type}>
            {object.map((n)=> 
            <Carousel.Item className={classlType}>
                <a href={n.link} target='blank'>
                    <img className='img-carousel-index' src={n.img} />
                </a>

                <Carousel.Caption className='caption'>
                    <ContentCarousel title={n.news}/>
                </Carousel.Caption>
            </Carousel.Item>
            )}
        </Carousel>
    )
}
export default carouselType;    
