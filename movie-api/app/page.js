"use client"
import React, { useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import Movies from "./components/Movies";

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
      <Movies movie={movie} />
      <Footer />
    </>
  );
}

