import React from "react";
import Card from "./Card";
import axios from 'axios';
import { useState, useEffect } from 'react';
import profile from "../Assests/profile.jpg"
import { useNavigate } from "react-router-dom";

export default function Main() {
    const [books, setBooks] = useState([]);
    const [username, setUsername] = useState('');

    const GetBooks = async () =>{
        axios.get('http://localhost:5000/api/v1/books/books') 
            .then(response => {
                setBooks(response.data.book);
                // console.log(response.data.book);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    }
    useEffect(() => {
        GetBooks();
        const storedUsername = localStorage.getItem('e_user');
        if (storedUsername) {
            setUsername(storedUsername.replace(/['"]+/g, ''));
        }
    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const delay = () => {
        return new Promise(resolve => setTimeout(resolve, 500));
    };

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
        fetchSearchResults();
        }, 500); 

        return () => clearTimeout(debounceTimeout);
    }, [searchTerm]);

    const fetchSearchResults = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:5000/api/v1/books/books/search?book_name=${searchTerm}`);
            await delay();
            
            setSearchResults(response.data);
            setLoading(false);
            } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    useEffect(() => {
        if(searchResults?.book?.length > 0){
            setBooks(searchResults.book);
            // console.log(searchResults.book);
        }
        // console.log(searchResults);
        // console.log("hit");
    }, [searchResults]);

    const addToWishlist = (book) => {
        // console.log("Added to wishlist:", book);
        const data = {
            id: book._id,
            book_name: book.book_name,
            book_author: book.book_author,
            book_isbn: book.isbn,
        }
        console.log(data);
    };
  const bookData1 = books.map((book) => {
    return (
      <Card
        key={book.isbn}
        id={book._id}
        name={book.book_name}
        image={book.image_url_m}
        // ratings={book.ratings}
        author={book.book_author}
        onClick={() => addToWishlist(book)}
      />
    );
  });
  const  navigate = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

    const handleLogout = async () => {
        try {
            localStorage.removeItem('e_token');
            setIsLoggedOut(true);
            return navigate('/', { replace: true });
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    if (isLoggedOut) {
        return navigate('/', { replace: true });
    }
  const bookData2 = books.map((book) => {
    return (
      <Card
      key={book.isbn}
      id={book._id}
      name={book.book_name}
      image={book.image_url_m}
      // ratings={book.ratings}
      author={book.book_author}
      onClick={() => {
        console.log(book);
      }}
      />
    );
  });



  return (
    <div className="main w-5/6 h-full bg-slate-100/90 overflow-scroll">
      <div className="w-full flex">
        <div className="searchbar w-4/5 h-24  flex justify-center items-center gap-10">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Harry Potter: The Philosopher's Stone"
            className="w-1/5 h-1/2 border-2 bg-white rounded-full p-4 ml-2"
          />
          <button
            
            className="h-1/2 w-24 border-2 border-red-500 bg-white rounded-full
         text-red-500"
          >
            Search
          </button>
        </div>
        <div  className="profile-card w-1/5 flex justify-center items-center gap-4">
          <img className="profile-photo w-12 rounded-full" src={profile} alt="MainProfile" />
          <div className="profile-details">
            <h5 className="text-sm">Hello</h5>
            <h1 className="font-black text-xl">{username}</h1>
          </div>
          <button
            
            className="h-1/2 w-24 border-2 border-red-500 bg-white rounded-full
         text-red-500" onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        
      </div>
      <div className="px-14">
        <h1 className="text-4xl pb-14">Welcome !</h1>
        <h3 className="text-2xl pb-4 text-slate-600">Recommended for You</h3>
        <div className="card pb-14 flex flex-wrap  gap-16">{bookData1}</div>
        <h3 className="text-2xl pb-4 text-slate-600">Recent Readings</h3>
        <div className="card flex flex-wrap gap-16">{bookData2}</div>
      </div>
    </div>
  );
}
