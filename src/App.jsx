import React, { useEffect, useReducer } from 'react';
import './App.css';
import { Footer } from './components/footer.js';
import { Keyboard } from './components/keyboard.js';
import { TextBox } from './components/textBox';
import { randCity } from './checkOrGive/randomCity.js'
import { popularCities } from './cities.js';
import { Timerwithscore } from './components/timer.js';
import { reducer } from './components/reducer.js';
import {HowTo} from './components/howToInstruction.jsx';
import {PopUp} from './components/popUp.jsx';

function App() {

  let generatedCity = randCity(popularCities);
  let nextCity = generatedCity[generatedCity.length - 2].toUpperCase();
 
  const [state, dispatch] =
    useReducer(reducer,
      {
        randomCity: generatedCity, nextCity: nextCity,
        message: '', guessed: 0, started: false, usedCities: [],
        minutes: 1, seconds: 20, gameOver: false
      });

  useEffect(() => {
    const myInterval = setInterval(() => {

        dispatch({ type: "START_TIMER"})
      
    }, 1000)
    return () => {
      clearInterval(myInterval);
    }
  },[state.seconds])

  const popUp = <PopUp guessed={state.guessed} dispatch={dispatch} />
  return (
    <>

    {state.gameOver? popUp : ''}

    <div id='score-howTo'>
      <HowTo />
      <Timerwithscore minute={state.minutes} second={state.seconds} guessed={state.guessed} dispatch={dispatch} />
      </div>  
      <div className="container">
        <div>
          <TextBox randomCity={state.randomCity} thatLetter={state.nextCity} message={state.message} dispatch={dispatch} />
        </div>
        <div id="keyBoard">
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
