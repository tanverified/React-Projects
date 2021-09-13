import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [warning, setWarning] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    let paragraphs = parseInt(count);
    if (count <= 0) {
      paragraphs = 1;
    }
    if (count > 8) {
      paragraphs = 8;
      setWarning(true);
    }
    setText(data.slice(0, paragraphs));
  };

  return (
    <section className="section-center">
      <h3>tired of boooring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="amount">Paragraph: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {warning && <p className="warning"> ❌ 8 is a max limit</p>}
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
