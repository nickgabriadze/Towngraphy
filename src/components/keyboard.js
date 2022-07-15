import './keyboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
export function Keyboard() {


    return (
        <>
            <div className="keyboard-grid">
                <div id="first-row">
                    <button>Q</button>
                    <button>W</button>
                    <button>E</button>
                    <button>R</button>
                    <button>T</button>
                    <button>Y</button>
                    <button>U</button>
                    <button>I</button>
                    <button>O</button>
                    <button>P</button>
                </div>

                <div id="second-row">
                    <button>A</button>
                    <button>S</button>
                    <button>D</button>
                    <button>F</button>
                    <button>G</button>
                    <button>H</button>
                    <button>J</button>
                    <button>K</button>
                    <button>L</button>
                </div>


                <div id="third-row">
                    <button id="enter-button">Enter</button>
                    <button>Z</button>
                    <button>X</button>
                    <button>C</button>
                    <button>V</button>
                    <button>B</button>
                    <button>N</button>
                    <button>M</button>
                    <button><FontAwesomeIcon icon={faDeleteLeft} /></button>
                </div>
            </div>
        </>
    );
};