import React from 'react';

const Word = ({correctLetters,selectedWords}) => {
  return (
    <div className="word">
      {selectedWords.split('').map((letter , i) =>{
        return (
          <span className='letter' key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        )
      })}

    </div>

    

  );
};

export default Word;
