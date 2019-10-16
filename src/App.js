import React from 'react';
import './App.css';

import { FullPage, Slide } from 'react-full-page';
import Particles from 'react-particles-js';

//components
import SideNav from './components/side-nav/side-nav.component';

//pages or sections
import Introduction from './pages/Introduction/Introduction.page';
import AboutPage from './pages/About/About.page';
import SkillsPage from './pages/Skills/Skills.page';
import WorkExperiencePage from './pages/WorkExperience/WorkExperience.page';
import ProjectPage from './pages/Projects/Project.page';
import ContactPage from './pages/Contact/Contact.page';

const particleParams = {
  "particles": {
      "number": {
          "value": 160,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 10,
          "random": true
      },
      "move": {
          "direction": "bottom",
          "out_mode": "out"
      },
      "line_linked": {
          "enable": false
      }
  },
  "interactivity": {
      "events": {
          "onclick": {
              "enable": true,
              "mode": "remove"
          }
      },
      "modes": {
          "remove": {
              "particles_nb": 10
          }
      }
  }
}
 
export default class App extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

   
  render() {
      
    return (
      <div className='App'>

          <Particles
            params={particleParams}
            className="particles-background"
          />
            <FullPage 
                controls={SideNav}
                initialSlide={0}
                duration={660}
                
                
            >
            <Slide className='full-page-slide'>
                <Introduction   />
            </Slide>
            <Slide className='full-page-slide  '>
                <AboutPage/>
            </Slide>
            <Slide className='full-page-slide'>
               <SkillsPage/>
            </Slide>
            <Slide className='full-page-slide'>
              <WorkExperiencePage/>
            </Slide>
            <Slide className='full-page-slide'>
              <ProjectPage/>
            </Slide>
            <Slide className='slide'>
              <ContactPage/>
            </Slide>
          </FullPage>
      </div>
      
    );
  }
}


 


 
