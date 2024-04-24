import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London", "Rome"],
      correctAnswer: "Paris"
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter"
    },
    {
      id: 3,
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Jane Austen", "J.K. Rowling", "Charles Dickens"],
      correctAnswer: "Harper Lee"
    }
  ];

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex === questions.length - 1) {
      setQuizEnd(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  if (quizEnd) {
    return <Result score={score} />;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <Question
        question={currentQuestion}
        handleAnswer={handleAnswer}
      />
    </div>
  );
};

export default QuizApp;