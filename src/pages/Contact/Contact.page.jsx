import React from 'react'
import './Contact.styles.scss'

import profilePic from '../../assets/profilePic3.jpg'

import gmailLogo from '../../assets/contact/gmail.svg';
import linkedinLogo from '../../assets/contact/linkedin.png';
import githubLogo from '../../assets/contact/github.png';
import facebookLogo from '../../assets/contact/facebook.png';
import instagramLogo from '../../assets/contact/instagram.png';

const ContactPage = () => {
    return (
        <div className='conatct-page'>
            <h2>Contact Me</h2>
            <div className='contacts-container'>
                <div className='profile-img-div'>
                    <img src={profilePic} alt='Profile' />
                </div>
                <div className='social-media-container'>
                    <a href='mailto:adityapratap7344@gmail.com' target="_blank"  rel="noopener noreferrer">
                        <img src={gmailLogo} alt={'Gmail'}/>
                    </a>
                    <a href='https://www.linkedin.com/in/aditya-pratap-b9a844152/' target="_blank"  rel="noopener noreferrer">
                        <img src={linkedinLogo} alt={'LinkedIn'}/>
                    </a>
                    <a href='https://github.com/AdityaPratap006' target="_blank"  rel="noopener noreferrer">
                        <img src={githubLogo} alt={'GitHub'}/>
                    </a>
                </div>
                <div className='social-media-container'>
                    <a href='https://www.facebook.com/profile.php?id=100021833653489' target="_blank"  rel="noopener noreferrer">
                        <img src={facebookLogo} alt={'Facebook'}/>
                    </a>
                    <a href='https://www.instagram.com/adityapratap7344/' target="_blank"  rel="noopener noreferrer">
                        <img src={instagramLogo} alt={'Instagram'}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
