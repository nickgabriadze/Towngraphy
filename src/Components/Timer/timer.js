import React from "react";
import './timer.css';
import {motion} from 'framer-motion';

const stylesForRed ={
    'color': '#c3073f',
    'fontWeight': 'bold'
}
const stylesForNormal ={
    'color': 'white',
    'fontWeight': 'bold'
}


export function Timerwithscore({ minute, second, guessed }) {

    let formattedMinute = minute > 9 ? minute : `0${minute}`
    let formattedSecond = second > 9 ? second : `0${second}`
    
    

    return (
        <>
            <motion.div  className="timer">
                <p style={minute === 0 ? second < 10 ? stylesForRed : stylesForNormal: stylesForNormal}id='time'>{`${formattedMinute}:${formattedSecond}`}</p>
                <p  id='guessed'>Guessed: {guessed}</p>
            </motion.div>
        </>
    );
};