import React from 'react';
import './keyboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export function Keyboard({ dispatch }) {

    return (
        <>
            <div id="keyboard">


                <div className="keyboard-grid">

                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        id='q'
                        
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 'q' })}>Q</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        id='w'
                       
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 'w' })}>W</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        id='e'
                        
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 'e' })}>E</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        
                        id='r'
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 'r' })}>R</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        id='t'
                        
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 't' })}>T</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        id='y'
                        
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 'y' })}>Y</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        id='u'
                        
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 'u' })}>U</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        id='i'
                       
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 'i' })}>I</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        id='o'
                        
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 'o' })}>O</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        id='p'
                        
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 'p' })}>P</motion.button>

                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        
                        id='a'
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 'a' })}>A</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        
                        id='s'
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 's' })}>S</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        
                        id='d'
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 'd' })}>D</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        id='f'
                        
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 'f' })}>F</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        
                        id='g'
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 'g' })}>G</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        
                        id='h'
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 'h' })}>H</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        id='j'
                        
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 'j' })}>J</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        id='k'
                        
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 'k' })}>K</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        id='l'
                        
                        onClick={() => dispatch({ type: "ADD_LETTER", char: 'l' })}>L</motion.button>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        id='spacer'><FontAwesomeIcon icon={faBuilding} /></motion.div>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        
                        id='hyphen'
                        onClick={() => dispatch({ type: "ADD_LETTER", char: '-' })}>-</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        id='z'
                        
                        whileTap={{ scale: 0.9 }} onClick={() => dispatch({ type: "ADD_LETTER", char: 'z' })}>Z</motion.button>


                    <motion.button whileHover={{ scale: 1.1 }}
                        
                        id='x'
                        whileTap={{ scale: 0.9 }} onClick={() => dispatch({ type: "ADD_LETTER", char: 'x' })}>X</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        id='c'
                        
                        whileTap={{ scale: 0.9 }} onClick={() => dispatch({ type: "ADD_LETTER", char: 'c' })}>C</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        
                        id='v'
                        whileTap={{ scale: 0.9 }} onClick={() => dispatch({ type: "ADD_LETTER", char: 'v' })}>V</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        
                        id='b'
                        whileTap={{ scale: 0.9 }} onClick={() => dispatch({ type: "ADD_LETTER", char: 'b' })}>B</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                        
                        id='n'
                        whileTap={{ scale: 0.9 }} onClick={() => dispatch({ type: "ADD_LETTER", char: 'n' })}>N</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                      
                        id='m'
                        whileTap={{ scale: 0.9 }} onClick={() => dispatch({ type: "ADD_LETTER", char: 'm' })}>M</motion.button>
                    <motion.button id='remove-letter' whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} onClick={() => dispatch({ type: "REMOVE_LETTER" })}><FontAwesomeIcon icon={faDeleteLeft} /></motion.button>

                    <motion.button whileHover={{ scale: 1.02 }}
                        
                        whileTap={{ scale: 0.96 }} id="space" onClick={() => dispatch({ type: "ADD_LETTER", char: ' ' })}>Space</motion.button>
                    <motion.button whileHover={{ scale: 1.05 }}
                       
                        whileTap={{ scale: 0.9 }} onClick={() => dispatch({ type: "ENTER" })} id="enter-button">Enter</motion.button>


                </div>
            </div>
        </>
    );
};