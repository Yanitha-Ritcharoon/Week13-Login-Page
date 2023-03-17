import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Navigation () {
    const fbColor = '#3b5998';
    const igColor = '#e1306c';
    const twColor = '#1da1f2';
    return (
        <nav className='navigation'>
            <ul className='navigation__list'>
                <li className='navigation__item'>
                    <a href='#' className='navigation__icon' style={{'--background-color': fbColor}}>
                        <FontAwesomeIcon icon={faFacebook} style={{ color: 'white' }} />
                    </a>
                </li>
                <li className='navigation__item'>
                    <a href='#' className='navigation__icon' style={{ '--background-color': igColor}}>
                    <FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }}  />
                    </a>
                </li>
                <li className='navigation__item'>
                    <a href='#' className='navigation__icon' style={{ '--background-color': twColor}}>
                    <FontAwesomeIcon icon={faTwitter} style={{ color: 'white' }} />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;