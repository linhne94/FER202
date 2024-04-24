import React, { createContext, useState } from 'react';
import { quizData } from './QuizData';


// Tạo context
export const QuizDataContext = createContext();

// Provider cho context
export const QuizDataProvider = ({ children }) => {
    const [questionsData] = useState(quizData);

    return (
        <QuizDataContext.Provider value={{ questionsData }}>
            {children}
        </QuizDataContext.Provider>
    );
};