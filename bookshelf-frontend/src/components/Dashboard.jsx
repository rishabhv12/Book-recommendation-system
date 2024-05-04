import React from "react";
import backgroundSVG from "../Assests/Vector 2.svg";
import Sidebar from "./Sidebar";
import Main from "./Main";
import LoginPage from "./Loginpage";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Dashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        async function checkAuth() {
          try {
            const token = localStorage.getItem("e_token");
            if (token) {
              axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
              setIsLoggedIn(true);
            } else {
              setIsLoggedIn(false);
            }
          } catch (error) {
            console.error("Error validating token:", error);
            setIsLoggedIn(false);
          }
        }
    
        checkAuth();
      }, []);
    
      if (!isLoggedIn) {
        // Redirect to login page or show login component
        return <LoginPage />;
        
      }
    
  return (
    <div className="dashboard h-screen w-full flex justify-center items-center">
      <img
        src={backgroundSVG}
        alt="background"    
        className="absolute z-5 bottom-0 drop-shadow-[0_40px_30px_rgba(245,96,86,0.5)]"
      />
      <div
        className=" h-full w-full m-9 my-9 bg-white z-10  
                        rounded-xl drop-shadow-2xl flex"
      >
    
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
