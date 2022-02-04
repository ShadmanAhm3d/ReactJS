import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../Helpers/Context';
import "../App.css"

const MainMenu = () => {
  const { gameState, setGameState} = useContext(QuizContext)
  return(
     <div className='Menu'>
     <button onClick={() => { setGameState("quiz")}}> Start quiz </button>
  </div>
  );
};

export default MainMenu;
