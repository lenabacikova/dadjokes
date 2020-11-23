import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './Joke/style.css';
import  Joke  from './Joke/index.jsx';
import jokes from './jokes.js';



const App = () => {
  return (
    <div>
      {jokes.map((joke) => (
        <Joke 
          id={joke.id}
          name={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
        ))}
    </div>
)
}
render(<App />, document.querySelector('#app'));
