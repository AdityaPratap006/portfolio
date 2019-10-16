import React from 'react'

import './Project.styles.scss';

import ProjectCard from '../../components/ProjectCard/ProjectCard.component';

//images
import image11 from '../../assets/projects/luxury garage/1.png';
import image12 from '../../assets/projects/luxury garage/2.png';
import image13 from '../../assets/projects/luxury garage/3.png';
import image14 from '../../assets/projects/luxury garage/4.png';
import image15 from '../../assets/projects/luxury garage/5.png';
import image16 from '../../assets/projects/luxury garage/6.png';
import image21 from '../../assets/projects/smart brain/1.png';
import image22 from '../../assets/projects/smart brain/2.png';
import image23 from '../../assets/projects/smart brain/3.png';
import image24 from '../../assets/projects/smart brain/4.png';

const myProjects = {

    'The Luxury Garage':{
        id:0,
        desc:'A luxury car rental web application',
        images: [image11,image12,image13,image14,image15,image16],
        techStack:['React', 'Node', 'Express', 'PostgreSQL'],
        linkToProject:'https://the-luxury-garage-by-aditya.herokuapp.com/',
    },
    'Face-Recognition-Brain':{
        id:1,
        desc:'A facial recognition web application',
        images: [image21,image22,image23,image24],
        techStack:['React', 'Node', 'Express', 'PostgreSQL'],
        linkToProject:'https://my-face-recognition-brain.herokuapp.com/',
    },
}

const ProjectPage = () => {
    return (
        <div className='project-page'>
            <h2>My Projects</h2>
            <div className='projects-container'>
                {
                    Object.keys(myProjects).map((key) => (
                        <ProjectCard key={myProjects[key].id} name={key} images={myProjects[key].images} desc={myProjects[key].desc} techStack={myProjects[key].techStack} linkToProject={myProjects[key].linkToProject}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectPage
