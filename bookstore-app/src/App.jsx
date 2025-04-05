import { useState } from 'react'
import './App.css'
import GenreList from './components/GenreList';

function App() {
  const [visibleGenres, setGenre] = useState("")
  

  const showGenre = () => {
	setGenre(true);
  }

  const hideGenre = () => {
	setGenre(false);
  }

  const bookData = {
	"fiction": [
	  {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.00},
	  {"title": "1984", "author": "George Orwell", "price": 8.50},
	  {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "price": 9.80}
	],
	"non-fiction": [
	  {"title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "price": 15.00},
	  {"title": "In Cold Blood", "author": "Truman Capote", "price": 12.00},
	  {"title": "The Diary of a Young Girl", "author": "Anne Frank", "price": 7.00}
	],
	"children": [
	  {"title": "Charlotte's Web", "author": "E.B. White", "price": 5.00},
	  {"title": "The Gruffalo", "author": "Julia Donaldson", "price": 6.00},
	  {"title": "Where the Wild Things Are", "author": "Maurice Sendak", "price": 8.00}
	]
  };

  
  return (
    <>
      <h1>Bookstore</h1>
      <div className="GenreLists">
	  	<GenreList genreName="Fiction" genre={bookData["fiction"]} />
		<GenreList genreName="Non-Fiction" genre={bookData["non-fiction"]}/>
		<GenreList genreName="Children" genre={bookData["children"]}/>
      </div>
    </>
  )
}

export default App
