  
import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import { Joke } from './Joke/index.jsx';
import jokes  from './jokes.js';


const App = () => {
  return 
    <>   
    <Joke />

    </>
    };


render(<App />, document.querySelector('#app'));
