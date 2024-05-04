import React from "react";
import backgroundSVG from "../Assests/Vector 2.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../Assests/Logo 1.svg";

export default function NewUser() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    
      const  navigate = useNavigate();
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/api/v1/auth/register/', formData);
          const token = response.data.accessToken; 
          localStorage.setItem('e_token', token);
          console.log('Registration successful!');
          navigate('/dashboard', { replace: true });
        } catch (error) {
          console.error('Registration failed:', error);
        }
      };
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
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
        <h2>Registration</h2>
        <h3 className="pb-6 text-slate-400">For Both Staff & Students</h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-3/4">
          {/* <label>
            {" "}
            <h2 className="font-semibold mb-1">Reg No.</h2>
            <input
              type="number"
              name="regno"
              placeholder="College Registration Number"
              className="border-2 w-full h-10 rounded-lg p-3"
            />
          </label> */}
          <label>
            {" "}
            <h2 className="font-semibold mb-1">Name</h2>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username} 
              onChange={handleChange}
              className="border-2 w-full h-10 rounded-lg p-3"
            />
          </label>
          <label>
            {" "}
            <h2 className="font-semibold mb-1">College Email ID</h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="username@collegename.ac.in"
              className="border-2 w-full h-10 rounded-lg p-3"
            />
          </label>
          <label>
            {" "}
            <h2 className="font-semibold mb-1">Password</h2>
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              value={formData.password} 
              onChange={handleChange}
              className="border-2 w-full h-10 rounded-lg p-3"
            />
            <button
        className="text-gray-600"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </button>

          </label>
          
          <button
            type="submit"
            value="Register"
            className="bg-red-400 text-white h-10 rounded-lg mt-2"
          >Register</button>

        </form>

        <div className="flex justify-between w-3/4">
          <h1 className="text-sm">
            Already a User?
            <span>
              <Link to="/" className="underline">
                Login No
              </Link>
            </span>
          </h1>
          <h1 className="text-sm"> Use as Guest</h1>
        </div>
      </div>
    </div>
  );
}
