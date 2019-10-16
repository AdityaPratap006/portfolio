import React, { Component } from 'react';

import './side-nav.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

const menu = {

    0: 'Introduction',
    1: 'About',
    2: 'Skills',
    3: 'Work Experience',
    4: 'Projects',
    5: 'Contact'
}

export class SideNav extends Component {

    // constructor(){
    //     super();
    //     this.state ={
    //         currentlyActiveSlide: 0
    //     }
    // }


    render() {
        
        const menuItemsList = Object.keys(menu).map((key,index) => (
            <MenuItem 
                key={key}
                currentSlide={this.props.getCurrentSlideIndex()}
                scrollToSlide = {this.props.scrollToSlide}
                mySlideNumber={index}
                text={menu[key]}
             />
        ))

        return (
            <div className='side-nav'>
               {menuItemsList}
            </div>
        )
    }
}

export default SideNav;
