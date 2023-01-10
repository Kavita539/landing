import "./heroSection.css";

const HeroSection = () => {
    return(
        <div className="hero-sec-container">
            <div className="left-hero-sec">
                <h2 className="hero-heading">Hone your english speaking skills over one-on-one video call</h2>
                <p className="hero-para">Practice english conversation with excellent communicators across the country and speak like a PRO</p>
                <div className="cta-btns">
                    <button className="primary-btn">Book a trial</button>
                    <button className="secondary-btn">Download our app</button>
                </div>
            </div>
            <div className="right-hero-sec">
                <div className="border-frame"></div>
            </div>
        </div>
    );
};

export {HeroSection}