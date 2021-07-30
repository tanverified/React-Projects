import React from "react";
import Tour from "./Tour";

function Tours(props) {
  return (
    <section>
      {props.tours.map((city) => {
        return (
          <Tour
            key={city.id}
            name={city.name}
            image={city.image}
            info={city.info}
            price={city.price}
          />
        );
      })}
    </section>
  );
}

export default Tours;
