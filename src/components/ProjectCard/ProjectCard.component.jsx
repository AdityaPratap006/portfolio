import React from 'react'
import './ProjectCard.styles.scss'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



import TechStackLabel from '../../components/TechStackLabel/TechStackLabel.component';
const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

const ProjectCard = ({name, desc, images, techStack, linkToProject}) => {
    return (
        <div className='project-card'>
            <a href={linkToProject} target="_blank"  rel="noopener noreferrer" className='project-link' >
                &#x2197;
            </a>
            <div className='project-images'>
                <Slider {...settings} className='project-image-slider'>
                    {
                        images.map((image,index) => <div className='image' key={index}><img alt={'Project Screenshot'} src={image}/></div>)
                    }
                </Slider>
            </div>
            <div className='project-description'>
                <h4>{name}</h4>
                <h5>{desc}</h5>
                <h6>TECH STACK</h6>
                <div className='tech-stack'>
                    {
                        techStack.map((tech,index) => <TechStackLabel key={index} technology={tech}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
