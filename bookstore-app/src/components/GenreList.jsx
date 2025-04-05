import React from 'react'

const GenreList = ({ genreName, genre }) => {

  return (
	<div className="genre-list">
		<h2>{genreName}</h2>
		<ul>
			{genre.map((book,index) =>
			<li key = {index} className="book">
				<p>{book.title}, {book.author}, ${book.price}</p>
			</li>
		)}
		</ul>
	</div>
  )
}

export default GenreList