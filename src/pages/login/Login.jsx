import "./login.css";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const{userName, setUserName, password, setPassword, user} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(user))
        navigate("/");
    }

    return(
        <div className="login-container">
        <div className="login-form-container">
            <h3 className="login-heading">Login</h3>
            <form onSubmit={handleSubmit} className="form-wrapper">
                <label htmlFor="username" className="label">Username</label>
                <input type="text" className="input-field" onChange={(e)=>setUserName(e.target.value)} value={userName}/>
                <label htmlFor="password" className="label">Password</label>
                <input type="text" className="input-field" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <button className="submit-btn">Login</button>
            </form>
        </div>
        </div>
    );
};

export {Login};