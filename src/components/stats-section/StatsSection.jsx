import "./statsSection.css";

const StatsSection = () => {
    return(
        <div className="stats-main-container">
            <div className="stats-card-container">
                <div className="stats-upper-card">
                <div className="stats-card stats-card-one">
                    <p className="stats-num">50K+</p>
                    <p className="stats-info">Mobile Downloads</p>
                </div>
                <div className="stats-card stats-card-two">
                    <p className="stats-num">80K+</p>
                    <p className="stats-info stats-info-two">Happy Learners</p>
                </div>
                </div>
                <div className="stats-lower-card">
                <div className="stats-card stats-card-three">
                    <p className="stats-num">53K+</p>
                    <p className="stats-info">Sessions per month</p>
                </div>
                <div className="stats-card stats-card-four">
                    <p className="stats-num">800+</p>
                    <p className="stats-info stats-info-four">Speakers around the globe</p>
                </div>
                </div>
            </div>
            <div className="stats-desc-container">
                <div className="stats-desc-wrapper">
                    <p className="stats-desc-trial">Book a trial</p>
                    <p className="stats-desc-title">Start your English speaking journey today!</p>
                    <p className="stats-desc-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                        pellentesque praesent vitae sit sagittis venenatis.</p>
                </div>
                <button className="stats-cta-btn">Book a trial</button>
            </div>
        </div>
    );
};

export {StatsSection};