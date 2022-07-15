import './textBox.css'
import { useRef } from 'react';

export function TextBox({ randomCity, thatLetter }) {
    const inputRef = useRef();
    
    const handleChange = (e) => {
        thatLetter = e.target.value;
    }
    

    return (
        <>
            <div className="textBox">
                <h1 id="pre-defined">{randomCity}</h1>
                <input id="user-input"ref={inputRef} value={thatLetter} onChange={(e) => handleChange(e)}type="text" autofocus='true'></input>

            </div>
        </>
    )
};