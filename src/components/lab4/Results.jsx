import React, { useContext } from 'react'
import { QuizDataContext } from './QuizDataContext';

const Results = ({ userAnswers }) => {
    const { questionsData } = useContext(QuizDataContext)

    const score = questionsData.reduce((acc, question, index) => {
        const correctAnswerIndex = question.correctAnswer;
        const userAnswerIndex = question.answers[userAnswers[index]];
        console.log(correctAnswerIndex)
        console.log(userAnswerIndex)
        return userAnswerIndex === correctAnswerIndex ? acc + 1 : acc;
    }, 0);

    return (
        <div className="results-container">
            <h2>Quiz Results</h2>
            <p>
                Your score: {score} out of {questionsData.length}
            </p>
        </div>
    );
}

export default Results