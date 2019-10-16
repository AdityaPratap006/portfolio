import React from 'react';

import './WorkExperience.styles.scss';

//components
import WorkExperienceCard from '../../components/WorkExperienceCard/WorkExperienceCard.component';

//company logos
import Culfest from '../../assets/comapnies logo/culfest.png';
import WebdExpert from '../../assets/comapnies logo/webdexpert.png';
import PCON from '../../assets/comapnies logo/pcon.png';


const WorkExperience = {

    Culfest: {
        id:0,
        logo:Culfest,
        description: `Cultural Fest of NIT Jamshedpur`,
        title:'Mobile Website Developer',
        website:'http://culfest.co.in/culfest19/',
    },
    WebdExpert: {
        id:1,
        logo:WebdExpert,
        description: `A New Delhi based web development startup`,
        title:'Web Development Intern (Remote)',
        website:'https://www.webdexpert.com/',
    },
    PCON: {
        id:2,
        logo:PCON,
        description: `Programming Club of NIT Jamshedpur`,
        title:'Full Stack Developer',
        website:'http://pcon.in/',
    },
}

const WorkExperiencePage = () => {

    const WorkExperienceList = Object.keys(WorkExperience).map((key) =>  (
        <WorkExperienceCard 
            key = {WorkExperience[key].id} 
            companyName={key}
            logo = {WorkExperience[key].logo}
            description={WorkExperience[key].description}
            title = {WorkExperience[key].title}
            website={WorkExperience[key].website} 
        />
    ))

    return (
        <div className="work-experience-page">
            <h2>My Work Experience</h2>
            <div className='work-experience-container'>
                { WorkExperienceList }
            </div>
        </div>
    )
}

export default WorkExperiencePage;
