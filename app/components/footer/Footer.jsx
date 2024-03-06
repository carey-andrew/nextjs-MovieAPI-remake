import Image from "next/image";
import imdbLogo from "../../../public/imdbLogo.svg";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <Image src={imdbLogo} alt="IMDb Logo" />
      </div>
      <div className="disclaimer">
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </div>
    </div>
  );
}