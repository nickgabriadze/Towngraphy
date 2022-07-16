import React, { useReducer } from 'react';
import './App.css';
import { Footer } from './components/footer.js';
import { Keyboard } from './components/keyboard.js';
import {TextBox} from './components/textBox';
import {ACTIONS} from './actions.js';
import {randCity} from './checkOrGive/randomCity.js'



function reducer(state, {type, payload}){
  if(state.randomCity == undefined){
    state.randomCity = 'Budapest'
  }
  if(state.letter == undefined){
    state.letter = state.randomCity[state.randomCity.length-2].toUpperCase()
  }
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

    default: return state;
  }
}

function App() {
  
  
  const [{randomCity = 'New York', letter=randomCity[randomCity.length - 2].toUpperCase()}, dispatch] = useReducer(reducer, {})


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
