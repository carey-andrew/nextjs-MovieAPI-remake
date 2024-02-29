import Link from "next/link"
import "./search.css"

export default function Search() {

    return (
        <>
        <div className="nav"> 
        <div className="home"><Link href="/">Home</Link></div>
        <div className="newMovie"><Link href="/">Discover</Link></div>
        <div className="search"><Link href="/Search">Search A Movie</Link></div>
      </div>
        <h1 className="intro">This is the search page</h1>
        
        </>
    )
}