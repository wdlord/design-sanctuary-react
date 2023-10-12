import "./Hero.css";
import Navbar from "./Navbar";

function Hero() {
  return (
    <>
      <div className="hero">
        <Navbar />
        <div className="thinker-graphic">
          <img src="/src/assets/thinker-with-pencil.png" alt=""></img>
          <ul>
            <li>The</li>
            <li>Design</li>
            <li>Sanctuary</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Hero;
