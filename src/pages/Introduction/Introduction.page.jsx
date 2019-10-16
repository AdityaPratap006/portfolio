import React from 'react'
import './Introduction.styles.scss';

import ProfilePic from '../../assets/profilePic6.jpg';

import styled, { keyframes } from 'styled-components';
import { rollIn, bounceInDown } from 'react-animations';

const rollInAnimation = keyframes`${rollIn}`;
const bounceInDownAnimation = keyframes`${bounceInDown}`

const RollingInDiv = styled.div`
  animation: 1s ${rollInAnimation} ease-out ;
`;

const BouncingDiv = styled.div`
 
    animation: 2.4s ${bounceInDownAnimation} ease-out ;
   
`;

export default class IntroductionPage extends React.Component {

    render(){
         
       
        return (
            <div className="introduction-page">
                <BouncingDiv className="profile-pic-container">
                    <img src={ProfilePic} alt="Profile" />
                </BouncingDiv>
                <RollingInDiv className="my-introduction">
                    <h2>Hey there!</h2>
                    <h1>I'm Aditya</h1>
                    <p>A pre-final year Computer Science and Engineering student</p>
                    <small>National Institute of Technology, Jamshedpur</small>
                </RollingInDiv> 
                
            </div>
        )
    }
    
}
