import Link from "next/link";
import "./header.css";
import "../../../app/globals.css";

export default function Header() {
  return (
    <>
      <div className="nav"> 
        <Link href="/">Home</Link>
        <Link href="Discover">Discover</Link>
        <Link href="/Search">Search A Movie</Link>
      </div>
    </>
  );
}
