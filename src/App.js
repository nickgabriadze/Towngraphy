import React from 'react';
import './App.css';
import { Footer } from './components/footer.js';
import { Keyboard } from './components/keyboard.js';
import {TextBox} from './components/textBox';
function App() {

  let randomCity = 'Boston'
  return (
    <>

      <TextBox randomCity={randomCity} thatLetter={randomCity[randomCity.length-2].toUpperCase()}/>
      <div id='keyboard'>
      <Keyboard />
      </div>
      
      <Footer />

    </>
  );
};

export default App;
