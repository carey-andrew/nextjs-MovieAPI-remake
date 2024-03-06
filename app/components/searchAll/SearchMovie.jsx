import React, { useState, useEffect } from "react";
import "./searchMovie.css";

const SearchMovie = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_DATA_API_KEY;

  const handleSearch = () => {
    onMovieSearch();
  };

  useEffect(() => {
    try {
      async function fetchMovies() {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
        );

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        setSearchResults(data.results); // Update state with fetched movies
      }

      fetchMovies();
    } catch (error) {
      console.error("error:", error);
      // Handle errors as needed
    }
  }, [searchTerm, apiKey]);

  return (
    <div className="inputWrapper">
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="searchInput"
      />
      <div className="searchWrapper">
        <div className="searchResults">
          {searchResults.map((movie) => (
            <div key={movie.id}>
              <h2 className="title">{movie.title}</h2>
              <div>
                <h5 className="movieOverview">{movie.overview}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchMovie;
