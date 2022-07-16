import React from "react";
import './timer.css';


export function Timerwithscore({minute, second, guessed}) {
    
    
  
    return (
        <>
            <div className="timer">
            <h1 style={minute == 0 ? second < 10 ?{'color': '#D70040'}:{'color':'#92abba'}: {'color':'#92abba'}}id='time'>{`${minute}:${second}`}</h1>
            <p id='gussed'>Guessed: {guessed}</p>
            </div>
        </>
    );
};