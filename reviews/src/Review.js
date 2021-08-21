import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

function Review() {
  const [index, setIndex] = useState(0);
  const { id, name, image, job, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    } else {
      return number;
    }
  };

  const nextHandle = () => {
      setIndex(checkNumber(index+1))
  };

  const prevHandle = () => {
    setIndex(checkNumber(index-1))
  };

  let randomHandle = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if(randomNumber === index){
        randomNumber = index + 1 ;
    }
    setIndex(checkNumber(randomNumber));    
    }


  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={id} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author"> {name} </h4>
      <p className="job"> {job} </p>
      <p className="info"> {text} </p>

      <div className="button-container">
        <button className="prev-btn" onClick={prevHandle}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextHandle}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomHandle}>surprise me</button>
    </article>
  );
}

export default Review;
