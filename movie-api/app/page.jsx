"use client"
import React, { useState } from "react";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Movies from "./components/movies/Movies";

export default function Home() {
  const [movie, setMovie] = useState();
  const [search, setSearch] = useState('');

  const handleSearch = (searchQuery) => {
    setSearch(searchQuery);
  };

  return (
    <>
      <Header />
      <Main />
      <Movies movie={Movies} />
      <Footer />
    </>
  );
}

