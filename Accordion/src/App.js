import React, { useState, useEffect } from "react";
// import data from "./data"; // for usage from local data file
import SingleQuestion from "./Question";

const url = "http://b8e00a7b5ca8.sn.mynetname.net:3012/jsonstore/questions";

function App() {
  const [questions, setQuestions] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const questions = await response.json();
      setQuestions(questions);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <div className="container">
        <h3>Questions and answers about Login</h3>
        <section className="info">
          {Object.values(questions).map((q) => {
            return <SingleQuestion key={q.id} {...q} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
