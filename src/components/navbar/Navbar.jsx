import clapingoLogo from "../../assets/ClapingoLogo.png";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return(
       <div className="navbar-container">
            <nav className="nav">
                <div className="right-nav-content nav-image">
                    <img src={clapingoLogo} alt="clapingoLogo" />
                </div>
                <ul className="nav-list">
                    <li>
                        Plans & Pricing
                    </li>
                    <li>
                        Teach with us
                    </li>
                    <li>
                        Affiliate Program
                    </li>
                    <li>
                        Kids
                    </li>
                </ul>
                <div className="right-nav-content">
                    <Link to="/login">
                    <button className="login-btn">Login</button>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export {Navbar};