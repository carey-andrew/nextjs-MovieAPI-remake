import "../app/globals.css"
import Header from "../app/components/header/Header"
import Footer from "../app/components/footer/Footer"
import SearchMovie from "../app/components/searchAll/SearchMovie"
import GenreSearch from "@/app/components/GenreSearch/GenreSearch"

export default function Search() {

    return (
        <>
        <Header />
        <SearchMovie />
        <GenreSearch />
        <Footer />
        </>
    )
}