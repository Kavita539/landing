import { HeroSection } from "../../components/hero-section/HeroSection";
import { Navbar } from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
    return(
        <div className="landing-page-container">
            <Navbar/>
            <HeroSection/>
            <div className="hero-section"></div>
        </div>
    );
}

export {Home}