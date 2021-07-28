import React from "react";
import Card from "./Card";
import data from "./data";

const App = () => {
  return (
    <main className="main">
      <section className="container">
        <h3>0 Peoples Birthday</h3>

     {
      data.map((e) => {
        return(
          <Card key={e.id} name={e.name} img={e.image} age={e.age} />
          )
      })
     }
      </section>
    </main>
  );
};

export default App;
