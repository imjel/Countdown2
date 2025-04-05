
/**
 * Question Card for rendering one question and its answers
 * Shuffles incorrect and random answers so they are displayed in random order
 */
import React from 'react'

const Question = ({ questionData, onSelection }) => {

	// saves incorrect and correct answers to an array, then shuffles them in random order
	const answers = Object.values(questionData.incorrectAnswers).concat(questionData.correctAnswer);
	const shuffledAnswers = answers.sort(() => Math.random() - 0.5);

	return (
		<div className='question-card'>
			<h2>{questionData.question.text}</h2>
			<ul className='question-list'>
				{shuffledAnswers.map((answer, index) => (
					// iterates through answers in shuffled answers 
					// each list item (answer) is a button that triggers correct/incorrect answer logic
					<li key={index}>
						<button className='answer-button' onClick={() => onSelection(answer)}>{answer}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Question