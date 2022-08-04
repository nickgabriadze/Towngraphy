import React from 'react';
import './keyboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faBuilding} from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';

export function Keyboard({ dispatch }) {

    return (
        <>
        <div id="keyboard">
            
    
            <div className="keyboard-grid">

                
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    id='q'
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 'q' })}>Q</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    id='w'
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 'w' })}>W</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    id='e'
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 'e' })}>E</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseDown={(e) => e.preventDefault()}
                    id='r'
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 'r' })}>R</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    id='t'
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 't' })}>T</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    id='y'
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 'y' })}>Y</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    id='u'
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 'u' })}>U</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    id='i'
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 'i' })}>I</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    id='o'
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 'o' })}>O</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    id='p'
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 'p' })}>P</motion.button>
               

               
               
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseDown={(e) => e.preventDefault()}
                    id='a'
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 'a' })}>A</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseDown={(e) => e.preventDefault()}
                    id='s'
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 's' })}>S</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseDown={(e) => e.preventDefault()}
                    id='d'
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 'd' })}>D</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    id='f'
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 'f' })}>F</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseDown={(e) => e.preventDefault()}
                    id='g'
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 'g' })}>G</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseDown={(e) => e.preventDefault()}
                    id='h'
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 'h' })}>H</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    id='j'
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 'j' })}>J</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    id='k'
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 'k' })}>K</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    id='l'
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => dispatch({ type: "ADD_LETTER", char: 'l' })}>L</motion.button>
                
                <div id='spacer'><FontAwesomeIcon icon={faBuilding}/></div>
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseDown={(e) => e.preventDefault()}
                    id='hyphen'
                    onClick={() => dispatch({ type: "ADD_LETTER", char: '-' })}>-</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                    id='z'
                    onMouseDown={(e) => e.preventDefault()}
                    whileTap={{ scale: 0.9 }} onClick={() => dispatch({ type: "ADD_LETTER", char: 'z' })}>Z</motion.button>    
                
                
                <motion.button whileHover={{ scale: 1.1 }}
                    onMouseDown={(e) => e.preventDefault()}
                    id='x'
                    whileTap={{ scale: 0.9 }} onClick={() => dispatch({ type: "ADD_LETTER", char: 'x' })}>X</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    id='c'
                    onMouseDown={(e) => e.preventDefault()}
                    whileTap={{ scale: 0.9 }} onClick={() => dispatch({ type: "ADD_LETTER", char: 'c' })}>C</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    onMouseDown={(e) => e.preventDefault()}
                    id='v'
                    whileTap={{ scale: 0.9 }} onClick={() => dispatch({ type: "ADD_LETTER", char: 'v' })}>V</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    onMouseDown={(e) => e.preventDefault()}
                    id='b'
                    whileTap={{ scale: 0.9 }} onClick={() => dispatch({ type: "ADD_LETTER", char: 'b' })}>B</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    onMouseDown={(e) => e.preventDefault()}
                    id='n'
                    whileTap={{ scale: 0.9 }} onClick={() => dispatch({ type: "ADD_LETTER", char: 'n' })}>N</motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                    onMouseDown={(e) => e.preventDefault()}
                    id='m'
                    whileTap={{ scale: 0.9 }} onClick={() => dispatch({ type: "ADD_LETTER", char: 'm' })}>M</motion.button>
                <motion.button id='remove-letter' whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} onClick={() => dispatch({ type: "REMOVE_LETTER" })}><FontAwesomeIcon icon={faDeleteLeft} /></motion.button>
  

           
            <motion.button whileHover={{ scale: 1.02 }}
                    onMouseDown={(e) => e.preventDefault()}
                    whileTap={{ scale: 0.96 }} id="space" onClick={() => dispatch({ type: "ADD_LETTER", char: ' ' })}>Space</motion.button>
            <motion.button whileHover={{ scale: 1.05 }}
                    onMouseDown={(e) => e.preventDefault()}
                    whileTap={{ scale: 0.9 }} onClick={() => dispatch({ type: "ENTER" })} id="enter-button">Enter</motion.button>
           
             
            </div>
            </div>
        </>
    );
};