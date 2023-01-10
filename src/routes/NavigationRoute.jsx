import {Routes, Route, Navigate} from "react-router-dom"
import { Home, Login } from "../pages";
import { Display } from "../pages/display/Display";
import { useAuth } from "../context/authContext";

const NavigationRoutes = () => {
  const {user} = useAuth(); 

  return(
    <Routes>
        <Route path="/" element={<Home />}/>
    
        
          
        
          <Route path="/display" element={<Display />} />
          <Route path="/login" element={<Login />} />

          {!user ? (
        <>
          <Route path="/login" element={<Login />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Navigate replace to="/" />} />
        </>
      )}
        

      </Routes>
  );
}

export {NavigationRoutes};