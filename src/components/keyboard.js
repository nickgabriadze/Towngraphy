import React from 'react';
import './keyboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

export function Keyboard({ dispatch }) {


    return (
        <>
            <div className="keyboard-grid">
                <div id="first-row">
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'q' })}>Q</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'w' })}>W</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'e' })}>E</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'r' })}>R</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 't' })}>T</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'y' })}>Y</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'u' })}>U</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'i' })}>I</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'o' })}>O</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'p' })}>P</button>
                </div>

                <div id="second-row">
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'a' })}>A</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 's' })}>S</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'd' })}>D</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'f' })}>F</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'g' })}>G</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'h' })}>H</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'j' })}>J</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'k' })}>K</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'l' })}>L</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: '-' })}>-</button>
                </div>


                <div id="third-row">
                    <button onClick={() => dispatch({ type: "ENTER" })} id="enter-button">Enter</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'z' })}>Z</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'x' })}>X</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'c' })}>C</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'v' })}>V</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'b' })}>B</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'n' })}>N</button>
                    <button onClick={() => dispatch({ type: "ADD_LETTER", char: 'm' })}>M</button>
                    <button onClick={() => dispatch({ type: "REMOVE_LETTER" })}><FontAwesomeIcon icon={faDeleteLeft} /></button>
                </div>
                <div id="fourth-row">
                    <button id="space" onClick={() => dispatch({ type: "ADD_LETTER", char: ' ' })}>Space</button>
                </div>
            </div>
        </>
    );
};