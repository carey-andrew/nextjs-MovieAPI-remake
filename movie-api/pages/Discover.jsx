
import "../app/components/movies/movies.css";
import Movies from "@/app/components/movies/Movies";
import "../app/globals.css"
import Main from "@/app/components/main/Main";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

export default function Discover() {
  return (
    <>
      <Header />
      <Main />
      <Movies />
      <Footer />
    </>
  );
}
