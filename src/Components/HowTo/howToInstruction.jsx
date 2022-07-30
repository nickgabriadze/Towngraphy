import React, { useState } from 'react';
import './howToInstruction.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import {motion} from 'framer-motion';

export function HowTo() {
    const [clicked, setClicked] = useState(false);

    const secondToLast = <div style={{'color':'#c3073f', 'fontWeight':'bold', 'display':'inline-block'}}>second to last</div>
    const citiesOrCountries = <div style={{'color':'#c3073f', 'fontWeight':'bold','display':'inline-block'}}>cities/countries</div>

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
        animate={{ opacity: [0, 0.1, 0.3, 0.5, 0.8, 1] }} id="explanation">Guess as many {citiesOrCountries} as you can, starting with a letter that is {secondToLast} character of the given city</motion.div>

    const handleClick = () => {
        clicked ? setClicked(false) : setClicked(true);
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