import React, { useState } from "react";
import Tour from "./Tour";
import data from "./data";

function Tours() {
  const [tours, setTours] = useState(data);

  const removeTourHandle = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  };

  const reloadHandle = () => {
    setTours(data);
  };

  return (
    <>
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} {...tour} removeTourHandle={removeTourHandle} />
          );
        })}
      </section>
      {tours.length === 0 && (
        <div className="title">
          <h2>No tour left</h2>
          <button className="btn" onClick={reloadHandle}>
            Get Tours
          </button>
        </div>
      )}
    </>
  );
}

export default Tours;
