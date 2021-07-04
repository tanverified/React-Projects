import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [num, setNum] = useState('Select Number');
  const [name, setName] = useState("___");
  const [moves, setMoves] = useState("___");

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${num}`
      );
      setName(res.data.name);
      setMoves(res.data.moves.length);

    }
    getData();
  });

  const selectHandler = (event) => {
    setNum(event.target.value);
  };

  return (
    <React.Fragment>
     <center>
     <select value={num} onChange={selectHandler} style={{padding:'5px',fontSize:'20px'}}>
        <option value="Select value">Select</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="25">25</option>
      </select>
      <h1>You choose <span style={{color: 'blue'}}>{num}</span> .</h1>
      <h1>My Name is <span style={{color: 'blue'}}>{name}</span> </h1>
      <h1>I have <span style={{color: 'blue'}}>{moves}</span>  moves</h1>
     </center>   
    </React.Fragment>
  );
}

export default App;
