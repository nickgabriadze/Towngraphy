import React, { useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import {faBars, faAngleLeft, faCopyright, faEnvelope, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion'

export function Header() {
    const [opened, setOpened] = useState(false);



    const [clicked, setClicked] = useState(false);

    const questionMark = <motion.div layout='position' id="q-mark" transition={{
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


    const unOpened = 
    <>
    <motion.div id="header-main">   
    <motion.div animate={{ rotate: -180 }}
  transition={{
    repeat: 1,
    repeatType: "reverse",
    duration: 1,
    rotate: 0
  }}
  onClick={() => setOpened(!opened)}><FontAwesomeIcon id="hamburger-menu" icon={faBars} /></motion.div>
    <motion.div animate={{x: [-200, 0]}}  transition={{ type: "spring", stiffness: 100 }}  id="website-name">Website Name</motion.div>
    <motion.div animate={{x: [-100, 0]}}  transition={{ type: "spring", stiffness: 100 }}   onClick={() => setClicked(!clicked)}>{clicked ? afterClicked: questionMark}</motion.div>
    </motion.div>
    </>

    const afterOpen =
    <>

     <motion.div id="after-open">   
    <motion.div  animate={{ rotate: 180 }}
  transition={{
    repeat: 1,
    repeatType: "reverse",
    duration: 1,
    rotate: 0
  }} onClick={() => setOpened(!opened)}><FontAwesomeIcon id="hamburger-menu-opened" icon={faAngleLeft} /></motion.div>
    <motion.div animate={{x: [-700, 0]}}  transition={{ type: "spring", stiffness: 100 }}  id="mail"><FontAwesomeIcon icon={faEnvelope} /></motion.div>
    <motion.div animate={{x: [-500, 0]}}  transition={{ type: "spring", stiffness: 100 }}><Link to="/privacy-policy"><FontAwesomeIcon id="copyright-logo" icon={faCopyright}/></Link></motion.div>
    </motion.div>
    </>
  
    return (
        <>
            <div id="header-box">
              
                {opened ? afterOpen:unOpened}
            </div>
        </>
    )
}