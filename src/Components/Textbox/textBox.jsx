import React, { useEffect, useState } from 'react';
import './textBox.css';
import { motion } from 'framer-motion';

export function TextBox({ randomCity, thatLetter, message, dispatch }) {
    const [changed, setChanged] = useState(false);
    
    const handleKey = (e) => {

        if (e.key === 'Backspace' || e.key === 'Delete') {
            dispatch({ type: "REMOVE_LETTER" })
        }
        if (e.key === 'q') {
            dispatch({ type: "ADD_LETTER", char: 'q' })
        }
        if (e.key === 'w') {
            dispatch({ type: "ADD_LETTER", char: 'w' })
        }
        if (e.key === 'e') {
            dispatch({ type: "ADD_LETTER", char: 'e' })
        }
        if (e.key === 'r') {
            dispatch({ type: "ADD_LETTER", char: 'r' })
        }
        if (e.key === 't') {
            dispatch({ type: "ADD_LETTER", char: 't' })
        }
        if (e.key === 'y') {
            dispatch({ type: "ADD_LETTER", char: 'y' })
        }
        if (e.key === 'u') {
            dispatch({ type: "ADD_LETTER", char: 'u' })
        }
        if (e.key === 'i') {
            dispatch({ type: "ADD_LETTER", char: 'i' })
        }
        if (e.key === 'o') {
            dispatch({ type: "ADD_LETTER", char: 'o' })
        }
        if (e.key === 'p') {
            dispatch({ type: "ADD_LETTER", char: 'p' })
        }
        if (e.key === 'a') {
            dispatch({ type: "ADD_LETTER", char: 'a' })
        }
        if (e.key === 's') {
            dispatch({ type: "ADD_LETTER", char: 's' })
        }
        if (e.key === 'd') {
            dispatch({ type: "ADD_LETTER", char: 'd' })
        }
        if (e.key === 'f') {
            dispatch({ type: "ADD_LETTER", char: 'f' })
        }

        if (e.key === 'g') {
            dispatch({ type: "ADD_LETTER", char: 'g' })
        }
        if (e.key === 'h') {
            dispatch({ type: "ADD_LETTER", char: 'h' })
        }
        if (e.key === 'j') {
            dispatch({ type: "ADD_LETTER", char: 'j' })
        }
        if (e.key === 'k') {
            dispatch({ type: "ADD_LETTER", char: 'k' })
        }
        if (e.key === 'l') {
            dispatch({ type: "ADD_LETTER", char: 'l' })
        }
        if (e.key === '-') {
            dispatch({ type: "ADD_LETTER", char: '-' })
        }
        if (e.key === 'Enter') {
            dispatch({ type: "ENTER" })
        }
        if (e.key === 'z') {
            dispatch({ type: "ADD_LETTER", char: 'z' })
        }
        if (e.key === 'x') {
            dispatch({ type: "ADD_LETTER", char: 'x' })
        }
        if (e.key === 'c') {
            dispatch({ type: "ADD_LETTER", char: 'c' })
        }
        if (e.key === 'v') {
            dispatch({ type: "ADD_LETTER", char: 'v' })
        }
        if (e.key === 'b') {
            dispatch({ type: "ADD_LETTER", char: 'b' })
        }
        if (e.key === 'n') {
            dispatch({ type: "ADD_LETTER", char: 'n' })
        }
        if (e.key === 'm') {
            dispatch({ type: "ADD_LETTER", char: 'm' })
        }
        if (e.key === 'Spacebar' || e.key === ' ') {
            dispatch({ type: "ADD_LETTER", char: ' ' })
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKey);

        return () => {
            window.removeEventListener('keydown', handleKey);
        };
    })
    
    let animation = { opacity: [0, 0.1, 0.3, 0.5, 0.8, 1], y: [-100, 0], x: [700, 0] }
    let animation1 = { opacity: [0,1], y: [-101, 0], x: [701, 0] }

    useEffect(() => {
        
       
        if (thatLetter.length === 1) {
            setChanged(!changed);
        }

    }, [thatLetter])



    return (
        <>
            <div className="entire-textBox">
                <div className="textBox">
                    <motion.h1
                        animate={{ opacity: [0, 0.1, 0.3, 0.5, 0.8, 1] }}
                        id="pre-defined">{randomCity}</motion.h1>

                    <div id='box-for-input'>
                        <motion.p
                            animate={changed ? animation:animation1}
                            transition={{ type: "spring", stiffness: 0, duration: 0.7 }}
                            id="answer">{thatLetter}</motion.p>
                    </div>
                </div>
                <p id="message">{message}</p>
            </div>
        </>
    )
};