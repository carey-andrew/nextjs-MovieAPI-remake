import Link from "next/link"
import "../app/components/movies/movies.css"
import Movies from "@/app/components/movies/Movies"
import "../app/globals.css"
import Main from "@/app/components/main/Main"

export default function Discover() {
    return (
        <>
        <div className="nav"> 
        <div className="home"><Link href="/">Home</Link></div>
        <div className="newMovie"><Link href="/">Discover</Link></div>
        <div className="search"><Link href="/Search">Search A Movie</Link></div>
      </div>
      <Main />
      <Movies movie={Movies} />
        
        </>
    )
}