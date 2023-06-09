import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const url = "http://b8e00a7b5ca8.sn.mynetname.net:3012/jsonstore/people";

function App() {
  const [people, setPeople] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

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
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => clearInterval(slider);
  }, [people.length, index]);

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
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
