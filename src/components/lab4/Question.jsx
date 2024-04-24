import React, { useEffect, useState } from 'react'

const Question = ({ question, handleAnswerSelect, handleNextQuestion }) => {
    const { question: questionText, answers } = question;
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerClick = (index) => {
        setSelectedAnswer(index);
        handleAnswerSelect(index);
    };

    useEffect(() => {
        // Reset selected answer when the question changes
        setSelectedAnswer(null);
    }, [question]);

    return (
        <div className="question-container">
            <h3>{questionText}</h3>
            <form>
                {answers.map((answer, index) => (
                    <div key={index} className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="answer"
                            id={`answer${index}`}
                            value={answer}
                            checked={selectedAnswer === index} // Check if the current answer is selected
                            onChange={() => handleAnswerClick(index)}
                            required // Pass the index to handleAnswerClick
                        />
                        <label className="form-check-label" htmlFor={`answer${index}`}>
                            {answer}
                        </label>
                    </div>
                ))}
            </form>
            <button className="btn btn-primary" onClick={handleNextQuestion}>
                Next
            </button>
        </div>
    );
}

export default Question