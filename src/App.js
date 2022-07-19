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

function App() {

  let generatedCity = randCity(popularCities);
  let nextCity = generatedCity[generatedCity.length - 2].toUpperCase();
  let char = generatedCity[generatedCity.length - 2].toUpperCase()
  const [state, dispatch] =
    useReducer(reducer,
      {
        randomCity: generatedCity, nextCity: nextCity,
        message: '', guessed: 0, started: false, usedCities: [],
        minutes: 0, seconds: 10, gameOver: false, letter: char
      });

  useEffect(() => {
    const myInterval = setInterval(() => {

        dispatch({ type: "START_TIMER"})
      
    }, 1000)
    return () => {
      clearInterval(myInterval);
    }
  },[state.seconds])


  let formattedMinute = state.minutes > 9 ? state.minutes : `0${state.minutes}`
  let formattedSecond = state.seconds > 9 ? state.seconds : `0${state.seconds}`


  return (
    <>
    <div id='score-howTo'>
      <HowTo letter={char}/>
      <Timerwithscore minute={formattedMinute} second={formattedSecond} guessed={state.guessed} dispatch={dispatch} />
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
