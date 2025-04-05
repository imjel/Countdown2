/**
 * Component for looping through and rendering multiple questions for a quiz
 */
import React from 'react'
import { useState } from 'react'
import Question from './Question'


const Quiz = ({ questions }) => {

	// answer logic:
	// keep running tally of correct/incorrect questions
	// keep track of which questions have been answered
	const [answeredQuestions, setAnsweredQuestions] = useState({});
	const [score, setScore] = useState(0);

	const handleAnswer = (questionIndex, selectedAnswer, correctAnswer) => {
		// if the question has already been answered, do nothing
		if (answeredQuestions[questionIndex]) {
			return;
		}

		// if answer is correct, add to toral score
		const isCorrect = selectedAnswer === correctAnswer;
		if(isCorrect) {
			setScore((prev) => prev + 1); 
		}

		// set answeredqs object to keep track of previously answered questions and their correct status
		setAnsweredQuestions((prev) => ({
			...prev,
			[questionIndex]: { isCorrect, selectedAnswer},
		}));
	};

  return (
	<div className="quiz-questions">
		<h2 className='score-text'>Score: {score} / {questions.length}</h2>
		{questions.map((ques, index) =>
			<Question 
				key={index}
				questionIndex={index}
				questionData={ques}
				onSelection={handleAnswer}
				isAnswered={answeredQuestions[index]}
			/>
		)}
	</div>
  )
}

export default Quiz