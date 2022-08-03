import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import { Footer } from '../Components/Footer/footer.js';
import { Keyboard } from '../Components/Keyboard/keyboard.js';
import { TextBox } from '../Components/Textbox/textBox.jsx';
import { randCity } from '../CheckOrGenerate/randomCity.js'
import { popularCities } from '../Utils/cities.js';
import { Timerwithscore } from '../Components/Timer/timer.js';
import { reducer } from '../Utils/reducer.js';
import { HowTo } from '../Components/HowTo/howToInstruction.jsx';
import { PopUp } from '../Components/GameOverPopUp/popUp'
import { Header } from '../Components/Header/header.jsx';
import { motion } from 'framer-motion';


function App() {

  let generatedCity = randCity(popularCities);
  let nextCity = generatedCity[generatedCity.length - 2].toUpperCase();
  const [width, setWidth] = useState(window.innerWidth)
  const [state, dispatch] =
    useReducer(reducer,
      {
        randomCity: generatedCity, nextCity: nextCity,
        message: '', guessed: 0, started: false, usedCities: [],
        minutes: 1, seconds: 40, gameOver: true, enterCounter: 0, wrongAnswer: ''
      });

  useEffect(() => {
    const myInterval = setInterval(() => {
      dispatch({ type: "START_TIMER" })
    }, 1000)

    return () => {
      clearInterval(myInterval);
    }
  }, [state.seconds])

  useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const popUp = <PopUp guessed={state.guessed} dispatch={dispatch} />
  
  const handleKey = (e) => {

    if (e.key === 'Backspace' || e.key === 'Delete') {
        dispatch({ type: "REMOVE_LETTER" })
    }
    if (e.key === 'q') {
        dispatch({ type: "ADD_LETTER", char: 'q' })
    }
    if (e.key === 'w') {
        dispatch({ type: "ADD_LETTER", char: 'w' })
    }
    if (e.key === 'e') {
        dispatch({ type: "ADD_LETTER", char: 'e' })
    }
    if (e.key === 'r') {
        dispatch({ type: "ADD_LETTER", char: 'r' })
    }
    if (e.key === 't') {
        dispatch({ type: "ADD_LETTER", char: 't' })
    }
    if (e.key === 'y') {
        dispatch({ type: "ADD_LETTER", char: 'y' })
    }
    if (e.key === 'u') {
        dispatch({ type: "ADD_LETTER", char: 'u' })
    }
    if (e.key === 'i') {
        dispatch({ type: "ADD_LETTER", char: 'i' })
    }
    if (e.key === 'o') {
        dispatch({ type: "ADD_LETTER", char: 'o' })
    }
    if (e.key === 'p') {
        dispatch({ type: "ADD_LETTER", char: 'p' })
    }
    if (e.key === 'a') {
        dispatch({ type: "ADD_LETTER", char: 'a' })
    }
    if (e.key === 's') {
        dispatch({ type: "ADD_LETTER", char: 's' })
    }
    if (e.key === 'd') {
        dispatch({ type: "ADD_LETTER", char: 'd' })
    }
    if (e.key === 'f') {
        dispatch({ type: "ADD_LETTER", char: 'f' })
    }
    if (e.key === 'g') {
        dispatch({ type: "ADD_LETTER", char: 'g' })
    }
    if (e.key === 'h') {
        dispatch({ type: "ADD_LETTER", char: 'h' })
    }
    if (e.key === 'j') {
        dispatch({ type: "ADD_LETTER", char: 'j' })
    }
    if (e.key === 'k') {
        dispatch({ type: "ADD_LETTER", char: 'k' })
    }
    if (e.key === 'l') {
        dispatch({ type: "ADD_LETTER", char: 'l' })
    }
    if (e.key === '-') {
        dispatch({ type: "ADD_LETTER", char: '-' })
    }
    if (e.key === 'Enter') {
        dispatch({ type: "ENTER" })
    }
    if (e.key === 'z') {
        dispatch({ type: "ADD_LETTER", char: 'z' })
    }
    if (e.key === 'x') {
        dispatch({ type: "ADD_LETTER", char: 'x' })
    }
    if (e.key === 'c') {
        dispatch({ type: "ADD_LETTER", char: 'c' })
    }
    if (e.key === 'v') {
        dispatch({ type: "ADD_LETTER", char: 'v' })
    }
    if (e.key === 'b') {
        dispatch({ type: "ADD_LETTER", char: 'b' })
    }
    if (e.key === 'n') {
        dispatch({ type: "ADD_LETTER", char: 'n' })
    }
    if (e.key === 'm') {
        dispatch({ type: "ADD_LETTER", char: 'm' })
    }
    if (e.key === 'Spacebar' || e.key === ' ') {
        dispatch({ type: "ADD_LETTER", char: ' ' })
    }
}

useEffect(() => {
    window.addEventListener('keydown', handleKey);

    return () => {
        window.removeEventListener('keydown', handleKey);
    };
})
  
  
  return (
    <>

      {state.gameOver ? popUp : ''}

      <Header />
      <motion.div id='score-howTo'
       animate={{opacity:[0,0.1, 0.3, 0.5, 0.8, 1]}} >
        <HowTo id="how-to-box" />
        {width > 480 ? <Timerwithscore minute={state.minutes} second={state.seconds} guessed={state.guessed} dispatch={dispatch} /> : ''}
      </motion.div>

      <div className="container">
        {width <= 480 ? <div id="duplicate-timer" ><Timerwithscore minute={state.minutes} second={state.seconds} guessed={state.guessed} dispatch={dispatch} /> </div> : ''}
        <TextBox id="textBox-with-randCity" randomCity={state.randomCity} thatLetter={state.nextCity} message={state.message} wrongAnswer={state.wrongAnswer} dispatch={dispatch} />
       
        <div id="keyBrd">
          <Keyboard dispatch={dispatch} />
        </div>
      </div>

      <div id='footer'>
        <Footer />
      </div>
    </>
  );
};

export default App;
