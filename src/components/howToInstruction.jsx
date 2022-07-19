import React, {useState} from 'react';
import './howToInstruction.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import {motion} from 'framer-motion'
export function HowTo({letter}){
    const [clicked, setClicked] = useState(false);

    const questionMark = <motion.div><FontAwesomeIcon id="circle-questionMark" icon={faCircleQuestion}/></motion.div>;
    const afterClicked = <motion.div animate={{ opacity: [0, 0.1, 0.3, 0.5, 0.8, 1] }} id="explanation">Guess as many cities as you can, starting at a letter {letter}</motion.div>
    
    const handleClick = () => {
        clicked ? setClicked(false): setClicked(true);
       console.log(clicked)
    }

    return(
        <>
        <div id="how-to-box" onClick={() => handleClick()}>
            {clicked ? afterClicked:questionMark }
   
        </div>
        </>
    );
}