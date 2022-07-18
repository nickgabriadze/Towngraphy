import React, { useReducer} from 'react';
import './App.css';
import { Footer } from './components/footer.js';
import { Keyboard } from './components/keyboard.js';
import { TextBox } from './components/textBox';
import { randCity } from './checkOrGive/randomCity.js'
import { popularCities } from './cities.js';
import { Timerwithscore } from './components/timer.js';
import { reducer } from './components/reducer.js';
import { HandleTimer } from './checkOrGive/handleTimer.js';

function App() {

  let generatedCity = randCity(popularCities);
  let nextCity = generatedCity[generatedCity.length - 2].toUpperCase();
  
  
  const [state, dispatch] =
    useReducer(reducer,
      {
        randomCity: generatedCity, nextCity: nextCity,
        message: '', upper: false, guessed: 0, started: false
      });

  let [minute, second] = HandleTimer(state.started)
    

  return (
    <>
      <Timerwithscore minute={minute} second={second} guessed={state.guessed} />
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
