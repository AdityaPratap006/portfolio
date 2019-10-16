import React from 'react'

import './menu-item.styles.scss';

export default function menuItem({scrollToSlide,currentSlide, text, mySlideNumber}) {
    
    let active = (currentSlide === mySlideNumber);
    return (
        <div className='menu-item' onClick={() => scrollToSlide(mySlideNumber)} >
            <h4 
                style={{
                    textDecoration: active ? 'underline' : 'none',

                }} 
                
            >
                {text}
            </h4>
            <div className="dot-container">
                <div className={`dot ${active?'filled':'empty'}`}>

                </div>
            </div>
        </div>
    )
}
