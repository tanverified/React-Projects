import React from "react";

function Card(props) {
  return (
    <>
      <article className="person">
        <img src={props.img} alt={props.name} />
        <div>
          <h4> {props.name} </h4>
          <p> {props.age} </p>
        </div>
      </article>
    </>
  );
}

export default Card;
