import React, {useEffect} from 'react';
import './popUp.css';
import {motion} from 'framer-motion';
import twoBuilding from './twoBuilding.png';

export function PopUp({guessed, dispatch}) {

    let numberOfCities = guessed > 1 ? 'cities/countries': 'city/country';
    let number = <p style={{'color': '#c3073f', 'display':'inline-block', 
                            'paddingRight':'2px', 'paddingLeft':'2px'}}>{guessed}</p>
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
            <h4 id="guessed-number">You managed to guess {number} {numberOfCities}</h4>
            <img id="building-img"src={twoBuilding}alt="Two buildings placed next to each other"></img>
            <button id='restart' onClick={()=>dispatch({type:"RESTART"})}>Restart</button>
        </motion.div>
        
        </>
    );
}

