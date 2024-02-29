import React, { useState, useEffect } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_DATA_API_KEY;

  useEffect(() => {
    try {
      async function fetchMovies() {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        setMovies(data.results); // Update state with fetched movies
      }

      fetchMovies();
    } catch (error) {
      console.error("error:", error);
      // Handle errors as needed
    }
  }, [apiKey]);

  return (
    <div className="wrapper">
      {movies.map((movie) => (
        <div key={movie.id}>
          <>
            <img
              className="poster"
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
          </>

          <>
            <div className="overviewWrap">
              <h2 className="flipTitle">{movie.title}</h2>
              <div className="overview">{movie.overview}</div>
            </div>
          </>
        </div>
      ))}
    </div>
  );
};
export default Movies;
