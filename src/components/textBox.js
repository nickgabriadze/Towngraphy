import React from 'react';
import './textBox.css'
import {motion} from 'framer-motion'
export function TextBox({ randomCity, thatLetter, message }) {
 



    return (
        <>
            <div className="textBox">
                <motion.h1 
                animate={{opacity: [0,0.1,0.3,0.5,0.8,1]}}
                style={randomCity.lenght > 30 ? {'fontSize':'15px'}:{'fontSize':'25px'}}id="pre-defined">{randomCity}</motion.h1>
                
                <div id='box-for-input'>
                    <motion.p 
                animate={{opacity: [0,0.1,0.3,0.5,0.8,1]}} id="answer">{thatLetter}</motion.p>
                </div>
                <p id="message">{message}</p>
            </div>
        </>
    )
};