import React, { useState } from "react";
import Header from "../app/components/header/Header";
import Footer from "../app/components/footer/Footer";
import SearchMovie from "../app/components/searchAll/SearchMovie";
import GenreSearch from "@/app/components/GenreSearch/GenreSearch";
import "../app/globals.css";

export default function Search() {
  const [isMovieSearched, setIsMovieSearched] = useState(false);

  // Function to handle when a movie is searched
  const handleMovieSearch = () => {
    setIsMovieSearched(true);
  };

  return (
    <>
      <Header />
      <GenreSearch searching={isMovieSearched} />
      <Footer />
    </>
  );
}
