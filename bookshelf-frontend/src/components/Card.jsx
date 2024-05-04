import React from "react";

import like from "../Assests/likeSVG.svg";
import unlike from "../Assests/notlikeSCG.svg";

export default function Card(props) {
    
  const [liked, setLiked] = React.useState(false);
  return (
    <div
      className="relative w-56 h-76 border-2 flex flex-col justify-center items-center
     bg-white drop-shadow-2xl rounded-2xl p-3"
      
    >
      <img src={props.image} alt={props.name} className="w-48 h-48" onClick={props.onClick}/>
      {liked ? (
        <img
          src={like}
          alt="like"
          className=" absolute w-6 h-6 top-6 right-6"
          onClick={() => setLiked(!liked)}
        />
      ) : (
        <img
          src={unlike}
          alt="like"
          className=" absolute w-6 h-6 top-6 right-6"
          onClick={() => setLiked(!liked)}
        />
      )}
      <h1 className="text-xl font-sans">{props.name}</h1>
      <div className="flex justify-end w-full pt-2">
        <p className="w-4/5 text-between font-serif">{props.author}</p>
        {/* <p className="w-1/5 font-serif">{props.ratings}/5</p> */}
      </div>
    </div>
  );
}
