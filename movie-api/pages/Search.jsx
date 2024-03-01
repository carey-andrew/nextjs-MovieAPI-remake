import "../app/globals.css"
import Header from "../app/components/header/Header"
import Footer from "../app/components/footer/Footer"
import SearchMovie from "../app/components/search/SearchMovie"
import FamilySearch from "@/app/components/kidsSearch/FamilySearch"

export default function Search() {

    return (
        <>
        <Header />
        <SearchMovie />
        <FamilySearch />
        <Footer />
        </>
    )
}