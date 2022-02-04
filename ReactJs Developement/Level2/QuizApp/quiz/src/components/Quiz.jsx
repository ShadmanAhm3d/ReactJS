import React, { useState, useContext} from "react";
import { Question } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Context";
const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const {currentscore, setCurrentscore, setGameState} = useContext(QuizContext)

  const nextQuestionHandler= () =>{
    if( Question[currQuestion].answer == optionChosen){
      setCurrentscore(currentscore+1);
    }

    setCurrQuestion(currQuestion + 1);
  };


 const finishHandler = () =>{
    if( Question[currQuestion].answer == optionChosen){
      setCurrentscore(currentscore+1); 
    }
    setGameState("endScreen")
  }




  return (
    <div className="Quiz">
      <h1>{Question[currQuestion].prompt} </h1>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}> {Question[currQuestion].optionA} </button>
        <button onClick={() => setOptionChosen("B")}> {Question[currQuestion].optionB} </button>
        <button onClick={() => setOptionChosen("C")}> {Question[currQuestion].optionC} </button>
        <button onClick={() => setOptionChosen("D")}> {Question[currQuestion].optionD} </button>
      </div>
      {currQuestion == Question.length-1 ? (
        <button onClick={finishHandler}> Finish quiz </button>
      ) : (
         <button onClick={nextQuestionHandler}>Next Question</button>
         ) }
     
    </div>
  );
};

export default Quiz
