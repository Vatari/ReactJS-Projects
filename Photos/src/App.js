import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const fetchPhotos = async () => {
    setLoading(true);
    let url;
    url = `${mainUrl}${clientID}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPhotos(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPhotos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(0);
  };
  return (
    <main>
      <section />
      <search>
        <form className="search-form">
          <input type="text" placeholder="search" className="form-input" />
          <button className="subimt-btn" type="submit" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </search>
      <section className="photos">
        <div className="photos-center"></div>
      </section>
    </main>
  );
}

export default App;
