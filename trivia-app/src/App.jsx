import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import './components/Quiz'
import './components/Question'

function App() {

	const api_URL = `https://the-trivia-api.com/v2/questions` // trivia api
	const [questionData, setQuestionData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// // question object
	// function Question({ questionData }) {
	// 	return (<>
	// 		<div>
	// 			<p>{questionData.question.text}</p>
	// 		</div>
	// 	</>
	// 	);
	// }

	// function Answer ({ questionData }) {
	// 	return (<>
	// 		<div>
	// 			<ul>
	// 				<li>{questionData.correctAnswer}</li>
	// 			</ul>
	// 		</div>
	// 	</>
	// 	);
	// }

	// async/await api request 
	useEffect(() => {
		const fetchQuestionData = async () => {
			try {
				const response = await fetch(api_URL);
				if (!response.ok) {
					throw new Error(`Response status: ${response.status}`);
				}

				const json = await response.json();
				// console.log(json);
				setQuestionData(json); // set the question data to the json
				setIsLoading(false);
			} catch (error) {
				throw new Error(`Response stats: ${response.status}`);
				setIsLoading(false);
			}
		};

		fetchQuestionData();
	}, []);

	if (isLoading) {
		return (
			<>
			<p>Loading...</p>
			</>
		);
	}

	return (
		<>
			<div>
				<h1>Quiz Questions</h1>
				{questionData.map((question, index) =>
					<Question key={index} questionData={question} />
				)}
				{questionData.map((question, index) =>
					<Answer key={index} questionData={question} />
				)}
			</div>
		</>
	);
}

export default App
