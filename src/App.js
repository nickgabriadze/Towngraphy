import React, { useReducer } from 'react';
import './App.css';
import { Footer } from './components/footer.js';
import { Keyboard } from './components/keyboard.js';
import { TextBox } from './components/textBox';
import { ACTIONS } from './actions.js';
import { randCity } from './checkOrGive/randomCity.js'
import { cities } from './cities.js';
import {checkCity} from './checkOrGive/checkCity.js';

function reducer(state, { type, char }) {

  switch (type) {

    case ACTIONS.ADD_LETTER:
      if (char === ' ') {
        return({
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
      if(!checkCity(cities, state.nextCity)){
        return({
          ...state,
          message: 'Not In a City List!',
          nextCity: state.randomCity[state.randomCity.length-2].toUpperCase()
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
  const [state, dispatch] = useReducer(reducer, { randomCity: generatedCity, nextCity: nextCity, message: '', upper: false,});

  return (
    <>

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
