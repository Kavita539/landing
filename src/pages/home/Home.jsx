import { BlogCard } from "../../components/blog-card/BlogCard";
import { HeroSection } from "../../components/hero-section/HeroSection";
import { HowWorks } from "../../components/how-works-section/HowWorks";
import { Navbar } from "../../components/navbar/Navbar";
import { StatsSection } from "../../components/stats-section/StatsSection";
import { blogData } from "../../data/blogData";
import "./home.css";

const Home = () => {
    return(
        <div className="landing-page-container">
            <Navbar/>
            <HeroSection/>
            <StatsSection/>
            <h2 className="what-offer-heading">What we offer ?</h2>
            <div className="blog-container">
              {blogData && blogData.map((item)=>{return <BlogCard img={item.img} title={item.title} content={item.content}/>})}
            </div>
            <h2 className="how-works-heading">How it works ?</h2>
            <HowWorks/>
        </div>
    );
}

export {Home}