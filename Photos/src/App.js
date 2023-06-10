import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const fetchPhotos = async () => {
    let url;
    url = `${mainUrl}?clientID=BwEo4txqX7VeK4WOcuyblsfoaYGUc3kyLKNmIjAcaf8`;
    try {
      const res = await fetch(url);
      const data = await res.json();
    } catch (err) {
      console.log(err);
    }
  };
  return <h2>stock photos starter</h2>;
}

export default App;
