import Link from "next/link";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="nav"> 
        <Link href="/"><p>Home</p></Link>
        <Link href="Discover"><p>Discover</p></Link>
        <Link href="/Search"><p>Search A Movie</p></Link>
      </div>
    </>
  );
}
