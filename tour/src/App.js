import React, { useState } from "react";
import data from "./Components/data";
import Loading from "./Components/Loading";
import Tours from "./Components/Tours";

function App() {
  const [loading, setloading] = useState(false);
  const [tours, settours] = useState(data);

 

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}

export default App;
