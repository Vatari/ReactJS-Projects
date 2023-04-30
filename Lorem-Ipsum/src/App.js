import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section-center">
      <h3>Lorem Ipsum Generator</h3>
      <form className="lorem-form" onSubmit={handleSubmit}></form>
    </section>
  );
}

export default App;
