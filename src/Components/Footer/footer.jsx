import React from 'react';
import './footer.css';
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";


export function Footer() {
    return (
        <>

            <div className="footer-container">

                <div id="flexable-footer">
                    <div id="contact">
                        <FontAwesomeIcon id="contact-mail-header" icon={faEnvelope}/>
                        <a id="contact-mail" href="mailto:ntgamedevelopers@gmail.com">Contact</a>
                        
                    </div>

                    <div id="copyright-logo-with-text">
                        <FontAwesomeIcon id="copyright-logo" icon={faCopyright} />
                        <Link to="/privacy-policy" id='pp'>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </>
    );

};