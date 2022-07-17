import React from 'react';
import './textBox.css'

export function TextBox({ randomCity, thatLetter, message }) {
 



    return (
        <>
            <div className="textBox">
                <h1 style={randomCity.lenght > 30 ? {'fontSize':'15px'}:{'fontSize':'25px'}}id="pre-defined">{randomCity}</h1>
                
                <div id='box-for-input'>
                    <p id="answer">{thatLetter}</p>
                </div>
                <p id="message">{message}</p>
            </div>
        </>
    )
};