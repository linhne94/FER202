import React from 'react';
import { Form } from 'react-bootstrap';

const Question = ({ question, handleAnswer }) => {
  return (
    <div>
      <Form>
        <div key={question.id}>
          <Form.Group>
            <Form.Label as="h5">{`Question ${question.id}: ${question.question}`}</Form.Label>
            {question.options.map((option, index) => (
              <Form.Check
                type="radio"
                name={`question-${question.id}`}
                id={`question-${question.id}-option-${index}`}
                key={option}
                label={option}
                onChange={() => handleAnswer(option)}
              />
            ))}
          </Form.Group>
        </div>
      </Form>
    </div>
  );
};

export default Question;