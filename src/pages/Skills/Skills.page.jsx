import React from 'react';
import './Skills.styles.scss';

import SkillSetCard from '../../components/skill-set-card/skill-set-card.component';

//Skills logo
import CLogo from '../../assets/Skills logo/c.png';
import CppLogo from '../../assets/Skills logo/c++.png';
import JavascriptLogo from '../../assets/Skills logo/Javascript.png';
import PythonLogo from '../../assets/Skills logo/python.png';

import HTML5Logo from '../../assets/Skills logo/HTML5.png';
import CSS3Logo from '../../assets/Skills logo/CSS3.png';
import SassLogo from '../../assets/Skills logo/Sass.png';
import Bootstrap4Logo from '../../assets/Skills logo/Bootstrap4.png';
import ReactLogo from '../../assets/Skills logo/React.png';
import ReduxLogo from '../../assets/Skills logo/Redux.png';

import NodejsLogo from '../../assets/Skills logo/Nodejs.png';
import ExpressLogo from '../../assets/Skills logo/Expressjs.png';
import SqlLogo from '../../assets/Skills logo/SQL.png';
import PostgreSQLLogo from '../../assets/Skills logo/Postgresql.png';
import FirebaseLogo from '../../assets/Skills logo/Firebase.png';

import GitLogo from '../../assets/Skills logo/Git.png';
import GitHubLogo from '../../assets/Skills logo/GitHub.png';
import NpmLogo from '../../assets/Skills logo/Npm.png';
import HerokuLogo from '../../assets/Skills logo/heroku.svg';
import NetlifyLogo from '../../assets/Skills logo/Netlify.png';

const skillSet = {

    'Programming Languages' : {
        id:0,
        skills:{
            'C': { score:60, logo: CLogo },
            'C++': {score:75, logo: CppLogo},
            'Javascript':{ score:70, logo:JavascriptLogo},
            'Python':{score:40, logo:PythonLogo},
        }
        
    },
    'Frontend Technologies/Frameworks' : {
        id:1,
        skills:{
            'HTML 5': {score:90, logo: HTML5Logo},
            'CSS 3': {score:80, logo:CSS3Logo},
            'SASS': {score:80, logo:SassLogo},
            'Bootstrap 4': {score:90, logo:Bootstrap4Logo},
            'React.JS':{score:70, logo:ReactLogo},
            'Redux':{score:40, logo: ReduxLogo},
        }
    },
    'Backend Technologies/Frameworks' : {
        id:2,
        skills:{

            'Node.JS':{score:65, logo:NodejsLogo},
            'Express.JS':{score:70, logo:ExpressLogo},
            'SQL':{score:75, logo:SqlLogo},
            'PostgreSQL':{score:60, logo:PostgreSQLLogo},
            'Firebase':{score:50, logo:FirebaseLogo}
        }
    },
    'Other Tools/Software' : {
        id:3,
        skills:{
            'Git': {score:20, logo:GitLogo},
            'GitHub': {score:45, logo:GitHubLogo},
            'NPM':{score:60,logo:NpmLogo},
            'Heroku': {score:50, logo:HerokuLogo},
            'Netlify':{score:20, logo:NetlifyLogo},
        }
    },
};
 
export default function SkillsPage() {
    return (
        <div className="Skills-page">
            <h2>My Skills</h2>
            <div className='skills-container'>
                {
                    Object.keys(skillSet).map((key,index) => (
                        <SkillSetCard key={skillSet[key].id} title={key} skills={skillSet[key].skills} />
                    ))
                }
            </div>
        </div>
    )
}



