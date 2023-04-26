import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "http://b8e00a7b5ca8.sn.mynetname.net:3012/jsonstore/tabs";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const jobs = await response.json();
    setJobs(jobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return <h2>tabs project setup</h2>;
}

export default App;
