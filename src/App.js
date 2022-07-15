import React from 'react';
import './App.css';
import { Footer } from './components/footer.js';
import { Keyboard } from './components/keyboard.js';
import {TextBox} from './components/textBox';
function App() {
  return (
    <>

      <TextBox randomCity='Boston'/>
      <div id='keyboard'>
      <Keyboard />
      </div>
      
      <Footer />

    </>
  );
};

export default App;
