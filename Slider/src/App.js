import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const url = "http://b8e00a7b5ca8.sn.mynetname.net:3012/jsonstore/people";

function App() {
  const [people, setPeople] = useState([]);

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

  return <h2>slider project setup</h2>;
}

export default App;
