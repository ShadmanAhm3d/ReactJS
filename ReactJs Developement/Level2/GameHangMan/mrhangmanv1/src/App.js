import './App.css';
import React, {useState} from 'react';
import Headers from './components/Header'
import Figure from './components/Figure'
import WrongLetter from './components/WrongLetter';
import Word from './components/Word';


const words = ['application' , 'programming' , 'interface' , 'wizard'];
let selectedWords  = words[Math.floor(Math.random() * words.length)];


function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectletters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  return (
    <div>
      <Headers />
      <div className='game-container'>
        <Figure /> 
        <WrongLetter />
        <Word correctLetters={correctLetters} selectedWords={selectedWords}/>
          
    </div>
    </div>
  );
}

export default App;
