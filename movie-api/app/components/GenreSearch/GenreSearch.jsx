import React, { useState, useEffect } from "react";
import "./GenreSearch.css";
import SearchMovie from "../searchAll/SearchMovie";

const GenreSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searching, setSearching] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_DATA_API_KEY;

  useEffect(() => {
    try {
      async function fetchGenres() {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        setSearchResults(data.genres);
      }

      fetchGenres();
    } catch (error) {
      console.error("error:", error);
    }
  }, [apiKey]);

  useEffect(() => {
    async function fetchMovies() {
      if (selectedGenre) {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenre.id}`
        );

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        setMovies(data.results);
      }
    }

    fetchMovies();
  }, [selectedGenre, apiKey]);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    setSearching(true);
  };
  
  const handleSearch = () => {
    setSelectedGenre(null); // Reset selectedGenre
    setSearching(false);
  };
  

  return (
    <>
      <div className="buttonWrap">
      <button className="reset" onClick={handleSearch}>Reset Search</button>
      </div>
      <div className="gridWrap">
        {searching ? null : (
          <>
            {searchResults.map((genre) => (
              <div
                key={genre.id}
                className="genre"
                onClick={() => handleGenreClick(genre)}
              >
                <h2>{genre.name}</h2>
              </div>
            ))}
          </>
        )}

        <div className="wrapper">
          {searching ? (
            <>
              {movies.map((movie) => (
                <div key={movie.id} className="poster">
                  <img
                    className="poster-image"
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                    alt={movie.title}
                  />
                  <div className="overlay">
                    <div className="overlay-content">
                      <h2>{movie.title}</h2>
                      <div className="overview">{movie.overview}</div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default GenreSearch;
