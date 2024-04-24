import React, { useState, useContext } from "react";
import { QuizDataContext } from "./QuizDataContext";
import Question from "./Question";
import Results from "./Results";

const Quiz = () => {

    const { questionsData } = useContext(QuizDataContext)

    const [quizState, setQuizState] = useState({
        currentQuestion: 0,
        userAnswersIndex: {},
        showResults: false,
    });

    const handleAnswerSelect = (selectedAnswer) => {
        setQuizState({
            ...quizState,
            userAnswersIndex: {
                ...quizState.userAnswersIndex,
                [quizState.currentQuestion]: selectedAnswer,
            },
        });
    };

    const handleNextQuestion = () => {
        if (quizState.currentQuestion < questionsData.length - 1) {
            setQuizState({
                ...quizState,
                currentQuestion: quizState.currentQuestion + 1,
            });
        } else {
            setQuizState({
                ...quizState,
                showResults: true,
            });
        }
    };

    return (
        <div>
            {!quizState.showResults && (
                <Question
                    question={questionsData[quizState.currentQuestion]}
                    handleAnswerSelect={handleAnswerSelect}
                    handleNextQuestion={handleNextQuestion}
                />
            )}
            {quizState.showResults && (
                <Results quizData={questionsData} userAnswers={quizState.userAnswersIndex} />
            )}
        </div>
    );
};


export default Quiz;