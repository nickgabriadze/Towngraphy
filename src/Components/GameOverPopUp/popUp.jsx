import React, {useEffect} from 'react';
import './popUp.css';
import {motion} from 'framer-motion/dist/framer-motion'



export function PopUp({guessed, dispatch}) {

    let numberOfCities = guessed > 1 ? 'cities/countries': 'city/country'
    const handleRestart = (e) =>{
        if(e.key === 'r'){
            dispatch({type:"RESTART"})
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleRestart);
    
        return () => {
            window.removeEventListener('keydown', handleRestart);
        };
       })
    return (
        <>
  
        <motion.div initial={{opacity: 0}}
        animate={{opacity:[0.1, 0.3, 0.5, 0.8, 1]}} id="popUp-box">
            <p id="times-up">Time's Up!</p>
            <h4 id="guessed-number">You managed to guess {guessed} {numberOfCities}</h4>
            <button id='restart' onClick={()=>dispatch({type:"RESTART"})}>Restart</button>
        </motion.div>
        
        </>
    );
}

