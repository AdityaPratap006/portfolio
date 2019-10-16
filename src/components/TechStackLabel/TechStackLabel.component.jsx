import React from 'react'
import './TechStackLabel.styles.scss'

const TechStackLabel = ({technology}) => {
    return (
        <div className='tech-stack-label'>
            {technology}
        </div>
    )
}

export default TechStackLabel
