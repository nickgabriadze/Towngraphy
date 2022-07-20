import React, { useState } from 'react';
import './howToInstruction.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion'

export function HowTo() {
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
        animate={{ opacity: [0, 0.1, 0.3, 0.5, 0.8, 1] }} id="explanation">Guess as many cities as you can, starting with a letter that is second to last character of the given city</motion.div>

    const handleClick = () => {
        clicked ? setClicked(false) : setClicked(true);
        console.log(clicked)
    }

    return (
        <>
            <motion.div
                id="how-to-box" onClick={() => handleClick()}>
                {clicked ? afterClicked : questionMark}

            </motion.div>
        </>
    );
}