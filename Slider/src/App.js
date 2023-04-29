import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const url = "http://b8e00a7b5ca8.sn.mynetname.net:3012/jsonstore/people";

function App() {
  const [people, setPeople] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPeople(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const size = Object.keys(people).length;

  useEffect(() => {
    const lastIndex = size - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, size]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Reviews
        </h2>
      </div>
      <div className="section-center">
        {Object.values(people).map((p, i) => {
          const { id, image, name, title, quote } = p;
          let position = "nextSlide";
          if (i === index) {
            position = "activeSlide";
          }
          if (i === index - 1 || (index === 0 && i === people.length - 1)) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
