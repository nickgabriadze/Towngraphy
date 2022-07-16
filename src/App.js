import React, { useReducer, useState } from 'react';
import './App.css';
import { Footer } from './components/footer.js';
import { Keyboard } from './components/keyboard.js';
import { TextBox } from './components/textBox';
import { ACTIONS } from './actions.js';
import { randCity } from './checkOrGive/randomCity.js'
import { cities } from './cities.js';
import { checkCity } from './checkOrGive/checkCity.js';
import { Timerwithscore } from './components/timer.js';
function reducer(state, { type, char }) {

  switch (type) {

    case ACTIONS.ADD_LETTER:
      if (char === ' ') {
        return ({
          ...state,
          nextCity: state.nextCity + char,
          upper: true,
          message: ''
        })
      }
      if (state.upper === true) {
        return ({
          ...state,
          nextCity: state.nextCity + char.toUpperCase(),
          upper: false,
          message: ''
        });
      }

      return ({
        ...state,
        nextCity: state.nextCity + char,
        upper: false,
        message: ''
      });

    case ACTIONS.REMOVE_LETTER:
      if (state.nextCity.length === 1) {
        return state;
      };
      return ({
        ...state,
        nextCity: state.nextCity.slice(0, -1),
        message: ''
      });

    case ACTIONS.ENTER:
      if (!checkCity(cities, state.nextCity)) {
        return ({
          ...state,
          message: 'Not In a City List!',
          nextCity: state.randomCity[state.randomCity.length - 2].toUpperCase()
        })
      }

      let randomCity = randCity(cities)
      let nextCity = randomCity[randomCity.length - 2].toUpperCase()
      return ({
        ...state,
        randomCity: randomCity,
        nextCity: nextCity
      });
    default: return state;
  }
}

function App() {

  let generatedCity = randCity(cities);
  let nextCity = generatedCity[generatedCity.length - 2].toUpperCase();
  const [state, dispatch] =
    useReducer(reducer,
      { randomCity: generatedCity, nextCity: nextCity, 
        message: '', upper: false, guessed: 0, started: false });

  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  const timer = setInterval(() => {
    clearInterval(timer);
    if (state.started == true) {
      if (seconds === 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      } else {
        setSeconds(seconds - 1)

      }
      if (seconds === 0 & minutes === 0) {
        setSeconds(0);
        setMinutes(0)
        state.started = false
      }
    }
  }, 1000)
  let formattedMinute = minutes > 9 ? minutes : `0${minutes}`
  let formattedSecond = seconds > 9 ? seconds : `0${seconds}`


  return (
    <>
      <Timerwithscore minute={formattedMinute} second={formattedSecond} guessed={state.guessed} />
      <div className="container">
        <div>

          <TextBox randomCity={state.randomCity} thatLetter={state.nextCity} message={state.message} />
        </div>
        <div id="keyBoard">
          <Keyboard dispatch={dispatch} />
        </div>
      </div>

      <Footer />

    </>
  );
};

export default App;
