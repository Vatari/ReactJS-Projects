import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const fetchPhotos = async () => {
    setLoading(true);
    let url;
    url = `${mainUrl}?client_id=BwEo4txqX7VeK4WOcuyblsfoaYGUc3kyLKNmIjAcaf8`;
    try {
      const res = await fetch(url);
      const data = await res.json();
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPhotos();
  }, []);
  return <h2>stock photos starter</h2>;
}

export default App;
