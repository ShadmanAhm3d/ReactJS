import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { Question } from "../Helpers/QuestionBank";





const EndScreen = () => {
   const {currentscore} = useContext(QuizContext) 



  return(
<div className="EndScreen">
      <h1>Quiz Finished</h1>
    
      <h1>
        {currentscore} / {Question.length}
      </h1>
</div>
  );
};

export default EndScreen;
