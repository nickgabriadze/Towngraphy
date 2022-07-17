import React from 'react';
import './footer.css';
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

export function Footer() {
    return (
        <>

            <div className="footer-container">

                <div id="flexable-footer">
                    <div id="linkedIn-logos">

                        <a id="linkedIn-gigi" href="https://www.linkedin.com/in/gigijishkariani/" target='_blank' rel="noreferrer">
                            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true">   </i>
                        </a>

                        <a id="linkedIn-nicka" href="https://www.linkedin.com/in/nickgabriadze/" target='_blank' rel="noreferrer">
                            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                        </a>
                    </div>

                    <a id="contact-mail" href="mailto:something@gmail.com">Contact</a>
                    <div id="copyright-logo-with-text">
                        <FontAwesomeIcon id="copyright-logo" icon={faCopyright} />
                        All Rights Reserved
                    </div>
                </div>
            </div>
        </>
    );

};