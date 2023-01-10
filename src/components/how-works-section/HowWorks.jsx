import "./howWorks.css";
import subscribe from "../../assets/Subscribeplans.png";

const HowWorks = () => {
    return(
        <>
        <div className="main-container">
            
            <div className="ellipse">
                <div className="subscribe">
                    <img src={subscribe} alt="subscribe" />
                </div>
                <div className="rectangle"></div>
            </div>

            <div className="container container-one">
                <h5 className="container-title">1.Create account</h5>
                <p className="container-para">Create your account using phone number or email and take a free trial at ₹1.</p>
            </div>
            <div className="container container-two">
                <h5 className="container-title">2.Subscribe</h5>
                <p className="container-para">Choose your preferred duration and select subscription package for your sessions. </p>
            </div>
            <div className="container container-three">
                <h5 className="container-title">3.Select time slot</h5>
                <p className="container-para">Subscribe & select any time slot between 10 AM to 12 midnight.</p>
            </div>
            <div className="container container-four">
                <h5 className="container-title">4.You are done</h5>
                <p className="container-para">That’s it! Start practicing and reach your learning goal in speaking.</p>
            </div>

        </div>
        </>
    )
}

export {HowWorks}