import React, {useState} from 'react';
import './style.css';



const Joke = (props) => {
  const [upLikes, setUpLikes] = useState(${props.likes});
  const [downLikes, setDownLikes] = useState(${props.dislikes});
  
return 
`<div className="container">
        <div className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img className="user-avatar" 
              src={`assets/img/${props.id}.png`} />
              <p className=${props.userName}">Neroxx</p>
            </div>
            <p className="${props.text}">
              The secret service isn't allowed to yell "Get down!" anymore when
              the president is about to be attacked. Now they have to yell
              "Donald, duck!"
            </p>
          </div>
          <div className="joke__likes">
            <button id="btn-up" className="btn-like btn-like--up" onClick={() => setUpLikes((upLikes +1))}></button>
            <span id="likes-up" className="likes-count likes-count--up"> {upLikes}
            </span>
            <button id="btn-down" className="btn-like btn-like--down" onClick={() => setDownLikes((downLikes -1))}></button>
            <span id="likes-down" className="likes-count likes-count--down"> {downLikes}
            </span>
          </div>
        </div>
      </div>
      `


export default Joke;
