
/**
 * Question Card for rendering one question and its answers
 * Shuffles incorrect and random answers so they are displayed in random order
 */
import React from 'react'
import { useMemo } from 'react';
import Button from '@mui/material/Button';

const Question = ({ questionData, onSelection, questionIndex, isAnswered }) => {

	// saves incorrect and correct answers to an array, then shuffles them in random order
	const answers = [...questionData.incorrectAnswers, questionData.correctAnswer];
	const shuffledAnswers = useMemo(() => {
		return [...answers].sort(() => Math.random() - 0.5)
	}, [questionData]);

	return (
		<div className='question-card'>
			<h2>{questionData.question.text}</h2>
			<ul className='question-list'>
				{shuffledAnswers.map((answer, index) => {
					const isSelected = isAnswered?.selectedAnswer === answer;
					const isCorrect = isAnswered?.isCorrect && isSelected;
					const isWrong = !isAnswered?.isCorrect && isSelected;
					// each list item (answer) is a button that triggers correct/incorrect answer logic
					return (
						<li key={index}>
							<Button
								disabled={!!isAnswered} // don't allow user to click if they've answered
								className={`answer-button ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
								onClick={() => onSelection(questionIndex, answer, questionData.correctAnswer)}
							>
								{answer}
							</Button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Question