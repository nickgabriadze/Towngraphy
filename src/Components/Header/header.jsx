import React, { useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft, faCopyright, faEnvelope, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export function Header() {
    const [opened, setOpened] = useState(false);



    const [clicked, setClicked] = useState(false);

    const questionMark = <motion.div layout='position' transition={{
        layout: {
            duration: 0.5,
        },
    }}
        animate={{ opacity: [0.5, 1] }}><FontAwesomeIcon id="circle-questionMark" icon={faCircleQuestion} /></motion.div>;

    const afterClicked = <motion.div layout='position' transition={{
        layout: {
            duration: 0.5,
        },
    }}
        animate={{ opacity: [0, 0.1, 0.3, 0.5, 0.8, 1] }}
        id="explanation-box"><div id="explanation">Guess as many cities as you can, starting with a letter that is second to last character of the given city</div></motion.div>



    let unOpened = <div  id="menu-name">
        <motion.div animate={{ opacity: [0, 0.1, 0.3, 0.5, 0.8, 1] }}
            whileTap={{ scale: 0.9 }} onClick={() => setOpened(!opened)}><FontAwesomeIcon icon={faBars} id="hamburger-menu" /></motion.div>
        <motion.p id="website-name" style={clicked ? { 'fontSize': '18px' } : { 'fontSize': '25px' }} animate={{ opacity: [0, 0.1, 0.3, 0.5, 0.8, 1] }}>Website Name</motion.p>
        <div id="question-mark" onClick={() => setClicked(!clicked)}>{clicked ? afterClicked : questionMark}</div>
        </div>

    let afterOpen = <motion.div id="after-click" layout animate={{ opacity: [0, 0.1, 0.3, 0.5, 0.8, 1] }}>
        <motion.div onClick={() => setOpened(!opened)} whileTap={{ scale: 0.9 }}><FontAwesomeIcon icon={faAngleLeft} id="hamburger-menu" /></motion.div>
        <motion.a id="envelope" href="mailto:something@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></motion.a>
        <motion.div><FontAwesomeIcon id="copyright-logo" icon={faCopyright} /></motion.div>
    </motion.div>
    return (
        <>
            <div id="header-box">
                {opened ? afterOpen : unOpened}
            </div>
        </>
    )
}