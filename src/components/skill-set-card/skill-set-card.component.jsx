import React from 'react';

import './skill-set-card.styles.scss';

import IndividualSkillCard from '../individual-skill-card/individual-skill-card.component';

const SkillSetCard = ({skills, title}) => {

    const renderSkills = Object.keys(skills).map((key,index) => (
        <IndividualSkillCard key={index} skill={key} score={skills[key].score } logo={skills[key].logo} />
    ))

    return (
        <div className="skill-set-card">
            <h4>{title}</h4>
            <div className='skill-list-container'>
                {renderSkills}
            </div>
            
        </div>
    )
}

export default SkillSetCard;
