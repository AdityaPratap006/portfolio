import React from 'react';
import './individual-skill-card.styles.scss';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const IndividualSkillCard = ({skill, score, logo}) => {
    
    return (
        <div className='individual-skill-card'>
            <div className="individual-skill-card-inner">
                <div className="individual-skill-card-front">
                    <CircularProgressbar 
                    value={score} 
                    text={`${score}%`} 
                    className='skill-score' 
                    styles={{
                    path :{ 
                        stroke: 'purple'
                        },
                        text:{
                            fill:'purple',
                            fontFamily: `'Happy Monkey', cursive`,
                            fontWeight:'700'
                        }
                    }}/>
                    <p>{skill}</p>
                
                </div>
                <div className="individual-skill-card-back">
                    <img alt={skill} src={logo}/>
                </div>
            </div>
           
                
        </div>
    )
}

export default IndividualSkillCard;
