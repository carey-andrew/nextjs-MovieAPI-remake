import React, { useState, useEffect } from "react";
import "./GenreSearch.css";

const FamilySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_DATA_API_KEY;

  useEffect(() => {
    try {
      async function fetchMovies() {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        setSearchResults(data.genres);
         // Update state with fetched movies
      }

      fetchMovies();
    } catch (error) {
      console.error("error:", error);
      // Handle errors as needed
    }
  }, [searchTerm, apiKey]);
//   console.log(searchResults)

  return (
    <div className="gridWrap">
      {searchResults.map((genres) => (
        <div key={genres.id} className="genre">
          <h2>{genres.name}</h2>
        </div> ))}
    
    </div>
  );
};
export default FamilySearch;