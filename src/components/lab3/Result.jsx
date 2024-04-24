
import React from 'react';

const Result = ({ score }) => {
  return (
    <div>
      <h2>Quiz Result</h2>
      <p>Your score: {score}</p>
      {/* Provide options for replaying or sharing the result */}
    </div>
  );
};

export default Result;