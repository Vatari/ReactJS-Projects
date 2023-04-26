import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "http://b8e00a7b5ca8.sn.mynetname.net:3012/jsonstore/tabs";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(1);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const jobs = await response.json();
    setJobs(jobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {Object.values(jobs).map((j, i) => {
            return (
              <button
                key={i}
                onClick={() => setValue(i)}
                className={`job-btn ${i === value && "active-btn"}`}
              >
                {j.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((d, i) => {
            return (
              <div key={i} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{d}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
