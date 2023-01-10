import {
    useContext,
    createContext,
    useState
} from "react";

const authContext = createContext();
const useAuth = () => useContext(authContext);

const AuthProvider = ({
    children
}) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const user = {
        userName: userName,
        password: password
    }

    return ( <authContext.Provider value = {
        {
            userName,
            setUserName,
            password,
            setPassword,
            user
        }
    } > {
        children
    } </authContext.Provider>);
};

export {useAuth,AuthProvider};