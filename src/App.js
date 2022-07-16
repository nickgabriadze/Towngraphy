import React, { useReducer } from 'react';
import './App.css';
import { Footer } from './components/footer.js';
import { Keyboard } from './components/keyboard.js';
import {TextBox} from './components/textBox';
import {ACTIONS} from './actions.js';
import {randCity} from './checkOrGive/randomCity.js'
import {cities} from './cities.js';


function reducer(state, {type, payload}){
  
  switch(type){
    case ACTIONS.ADD_LETTER:
      
      return({
        ...state,
        letter: state.letter + payload
      })
    case ACTIONS.REMOVE_LETTER:
      if(state.letter.length === 1 ){
        return state;
      }
      return({
        ...state,
        letter: state.letter.slice(0, -1)
      })
    
    case ACTIONS.ENTER:
      return({
        ...state,
        randomCity: randCity(cities),
        letter: state.randomCity[state.randomCity.length-2].toUpperCase()
      })
    default: return state;
  }
}

function App() {
  
  
  const [{randomCity=randCity(cities), letter=randomCity[randomCity.length-2].toUpperCase()}, dispatch] = useReducer(reducer, {})
 
  return (
    <>

      <div className="container">
      <div>
      <TextBox randomCity={randomCity} thatLetter={letter}/>
      </div> 
      <div id="keyBoard">
      <Keyboard dispatch={dispatch}/>
      </div>
      </div>
      
      <Footer />

    </>
  );
};

export default App;
