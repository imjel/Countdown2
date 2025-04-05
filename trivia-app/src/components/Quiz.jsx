/**
 * Component for looping through and rendering multiple questions for a quiz
 */
import React from 'react'
import Question from './Question'

const Quiz = ({ questions }) => {

	// answer logic:
	// when user selects a question, visually change button
	// keep running tally of correct/incorrect questions
	const handleAnswer = (answer) => {
		console.log('selected:', answer);

	};

  return (
	<div className="quiz-question">
		{questions.map((ques, index) =>
			<Question 
				key={index}
				questionData={ques}
				onSelection={handleAnswer}
			/>
		)}
	</div>
  )
}

export default Quiz