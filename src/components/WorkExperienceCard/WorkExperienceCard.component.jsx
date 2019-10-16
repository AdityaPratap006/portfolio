import React from 'react';

import './WorkExperienceCard.styles.scss';

const WorkExperienceCard = ({logo, companyName, description, title, website}) => {
    return (
        <a href={website} target="_blank" rel="noopener noreferrer" className='work-experience-card'>
            <div className='company-logo-container'>
                <img src={logo} alt={companyName}/>
            </div>
            <div className='description'>
                <h4>{companyName}</h4>
                <p>{description}</p>
                <h5>{title}</h5>
            </div>
        </a>
    )
}

export default WorkExperienceCard;

