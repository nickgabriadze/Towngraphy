import React, { useEffect } from 'react';
import './textBox.css';
import { motion } from 'framer-motion';

export function TextBox({ randomCity, thatLetter, message, dispatch, wrongAnswer }) {
    
    
    
    let animation = { opacity: [0, 0.1, 0.3, 0.5, 0.8, 1], y: [-100, 0], x: [700, 0] }
   
    
    return (
        <>
            <div className="entire-textBox">
                <div className="textBox">
                    <motion.h1
                        animate={{ opacity: [0, 0.1, 0.3, 0.5, 0.8, 1] }}
                        id="pre-defined">{randomCity}</motion.h1>

                    <div id='box-for-input'>
                        <motion.p
                            animate={animation}
                            transition={{ type: "spring", stiffness: 0, duration: 1 }}
                            id="answer">{thatLetter}</motion.p>
                    </div>
                </div>
                <div id="message"><h5 style={{'color':'#c3073f', 'display':'block'}}>{wrongAnswer}</h5>  {message}</div>
            </div>
        </>
    )
};