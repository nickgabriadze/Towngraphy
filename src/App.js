import React, { useReducer} from 'react';
import './App.css';
import { Footer } from './components/footer.js';
import { Keyboard } from './components/keyboard.js';
import { TextBox } from './components/textBox';
import { randCity } from './checkOrGive/randomCity.js'
import { popularCities } from './cities.js';
import { Timerwithscore } from './components/timer.js';
import { reducer } from './components/reducer.js';

function App() {

  let generatedCity = randCity(popularCities);
  let nextCity = generatedCity[generatedCity.length - 2].toUpperCase();

  const [state, dispatch] =
    useReducer(reducer,
      {
        randomCity: generatedCity, nextCity: nextCity,
        message: '', guessed: 0, started: false, usedCities: [], minutes: 1, seconds: 20
      });

  
    const myInterval = setInterval(() => {
      clearInterval(myInterval)
      if(state.started){
      dispatch({ type: "START_TIMER", char: state.seconds < 1 ? 59:state.seconds - 1})
      }
      
    }, 1000)
  




  let formattedMinute = state.minutes > 9 ? state.minutes : `0${state.minutes}`
  let formattedSecond = state.seconds > 9 ? state.seconds : `0${state.seconds}`


  return (
    <>
      <Timerwithscore minute={formattedMinute} second={formattedSecond} guessed={state.guessed} />
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
