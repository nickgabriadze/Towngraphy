import React, {useEffect} from "react";
import './timer.css';
import {motion} from "framer-motion"

export function Timerwithscore({ minute, second, guessed }) {



    return (
        <>
            <motion.div  animate={{opacity: [0,0.1,0.3,0.5,0.8,1]}} className="timer">
                <h1  style={minute === 0 ? second < 10 ? { 'color': '#D70040' } : { 'color': '#92abba' } : { 'color': '#92abba' }} id='time'>{`${minute}:${second}`}</h1>
                <p  id='gussed'>Guessed: {guessed}</p>
            </motion.div>
        </>
    );
};