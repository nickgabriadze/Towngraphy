import './keyboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

export function Keyboard({type,dispatch}) {


    return (
        <>
            <div className="keyboard-grid">
                <div id="first-row">
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'q'})}>Q</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'w'})}>W</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'e'})}>E</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'r'})}>R</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 't'})}>T</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'y'})}>Y</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'u'})}>U</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'i'})}>I</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'o'})}>O</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'p'})}>P</button>
                </div>

                <div id="second-row">
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'a'})}>A</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 's'})}>S</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'd'})}>D</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'f'})}>F</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'g'})}>G</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'h'})}>H</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'j'})}>J</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'k'})}>K</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'l'})}>L</button>
                </div>


                <div id="third-row">
                    <button onClick={()=>dispatch({type:"ENTER"})}id="enter-button">Enter</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'z'})}>Z</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'x'})}>X</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'c'})}>C</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'v'})}>V</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'b'})}>B</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'n'})}>N</button>
                    <button onClick={()=>dispatch({type:"ADD_LETTER", payload: 'm'})}>M</button>
                    <button onClick={()=>dispatch({type:"DELETE"})}><FontAwesomeIcon icon={faDeleteLeft} /></button>
                </div>
            </div>
        </>
    );
};