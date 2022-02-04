import "./App.css";
import React from "react";
import { useState, useContext } from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";

import { QuizContext } from "./Helpers/Context";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [currentscore, setCurrentscore] = useState(0);

  return (
    <div className="App">
      <h1> Quiz App </h1>
      <QuizContext.Provider value={{ gameState, setGameState , currentscore, setCurrentscore}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
