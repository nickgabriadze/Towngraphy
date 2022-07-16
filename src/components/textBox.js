import './textBox.css'
import { useState } from 'react'

export function TextBox({ randomCity, thatLetter }) {
 



    return (
        <>
            <div className="textBox">
                <h1 id="pre-defined">{randomCity}</h1>
                <div id='box-for-input'>
                    <p id="answer">{thatLetter}</p>
                </div>
            </div>
        </>
    )
};