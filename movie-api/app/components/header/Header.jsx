import Link from "next/link";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="nav"> 
        <div className="home"><Link href="/">Home</Link></div>
        <div className="newMovie"><Link href="Discover">Discover</Link></div>
        <div className="search"><Link href="/Search">Search A Movie</Link></div>
      </div>
    </>
  );
}
