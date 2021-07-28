import React, { useState } from "react";
import Card from "./Card";
import data from "./data";


const App = () => {

  const [peoples, setPeoples] = useState(data);


  return (
    <main className="main">
      <section className="container">
        <h3>0 Peoples Birthday</h3>
        {peoples.map((person) => {
          return (
            <Card
              key={person.id}
              name={person.name}
              img={person.image}
              age={person.age}
            />
          );
        })}
        <button onClick={()=>{setPeoples([])}}>Clear all</button>
      </section>
    </main>
  );
};

export default App;
