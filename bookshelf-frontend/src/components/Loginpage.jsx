import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundSVG from "../Assests/Vector 2.svg";
import logo from "../Assests/Logo 1.svg";
import { Link } from "react-router-dom";

export default function Loginpage() {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
    
      const  navigate = useNavigate();
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
            const response = await axios.post('http://localhost:5000/api/v1/auth/login/', formData);
            const token = response.data.accessToken; 
            const user = response.data.username;
            localStorage.setItem('e_token', token);
            localStorage.setItem('e_user', JSON.stringify(user));
            //   console.log('Registration successful!');
            navigate('/dashboard', { replace: true });
            } catch (error) {
            console.error('Registration failed:', error);
            }
        };
  return (
    <div className="login relative flex fe justify-center items-center w-full h-screen text-black bg-[#F3F3F7]">
      <img
        src={backgroundSVG}
        alt="background"
        className="absolute bottom-0 drop-shadow-[0_40px_30px_rgba(245,96,86,0.5)]"
      />
      <div className="w-1/4 h-5/6 z-20 bg-white rounded-lg drop-shadow-2xl flex flex-col gap-5 justify-center items-center">
        <h1 className="text-2xl font-semibold">
          My <span className="text-red-400">Book</span> <br />
          <span className="text-4xl tracking-widest">Shelf</span>
        </h1>
        <h2>Welcome Back!</h2>
        <h3 className="pb-6 text-slate-400">
          {" "}
          Sign in to continue to yourDigital Library
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-3/4">
          <label>
            {" "}
            <h2 className="font-semibold mb-1">Email</h2>
            <input
              type="username"
              name="username"
              value={formData.username} 
              onChange={handleChange}
              placeholder="username"
              className="border-2 w-full h-10 rounded-lg p-3"
            />
          </label>
          <label>
            {" "}
            <h2 className="font-semibold mb-1">Password</h2>
            <input
              type="password"
              name="password"
              value={formData.password} 
              onChange={handleChange}
              className="border-2 w-full h-10 rounded-lg p-3"
            />
          </label>
          <button
            type="submit"
            value="Log In"
            className="bg-red-400 text-white h-10 rounded-lg mt-2"
          >
            Log In
          </button>
        </form>

        <div className="flex justify-between w-3/4">
          <h1 className="text-sm">
            New User?
            <span>
              <Link to="/newuser" className="underline">
                Register Here
              </Link>
            </span>
          </h1>
          <h1 className="text-sm"> Use as Guest</h1>
        </div>
      </div>
    </div>
  );
}
