import React from "react";
import './timer.css';
import {motion} from "framer-motion"

const stylesForRed ={
    'color': '#F90B31',
    'fontWeight': 'bold'
}
const stylesForNormal ={
    'color': '626c76',
    'fontWeight': 'bold',
}

export function Timerwithscore({ minute, second, guessed }) {

    let formattedMinute = minute > 9 ? minute : `0${minute}`
    let formattedSecond = second > 9 ? second : `0${second}`
  

    return (
        <>
            <motion.div  animate={{opacity: [0,0.1,0.3,0.5,0.8,1]}} className="timer">
                <p style={minute === 0 ? second < 10 ? stylesForRed : stylesForNormal: stylesForNormal}id='time'>{`${formattedMinute}:${formattedSecond}`}</p>
                <p  id='gussed'>Guessed: {guessed}</p>
            </motion.div>
        </>
    );
};