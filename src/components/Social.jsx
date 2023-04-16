import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {faGithub, faLinkedin, faTelegram, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

function Social () {
    
    return (
        <ul className="social-list">
            <li className="social-list-item">
                <a href="https://github.com/KobzarMax" className="social-list-link">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li className="social-list-item">
                <a href="https://www.linkedin.com/in/maksym-kobzar-826a271ba/" className="social-list-link">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
            <li className="social-list-item">
                <a href="https://t.me/maxooa" className="social-list-link">
                    <FontAwesomeIcon icon={faTelegram} />
                </a>
            </li>
            <li className="social-list-item">
                <a href="https://www.instagram.com/maxooa/" className="social-list-link">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
            <li className="social-list-item">
                <a href="https://wa.me/+48452294063" className="social-list-link">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
            </li>
        </ul>
    )

}

export default Social