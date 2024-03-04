import "./SearchByGenre.css";
import React, { useState, useEffect } from "react";

const SearchByGenre = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_DATA_API_KEY;

  useEffect(() => {
    try {
      async function fetchMovies() {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=&with_genres=${searchTerm}`
        );

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        setSearchResults(data.genres);
      }
      fetchMovies();
    } catch (error) {
      console.error("error:", error);
    }
  }, [searchTerm, apiKey]);
};
export default SearchByGenre;