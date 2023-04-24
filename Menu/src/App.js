import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
//import items from "./data";

const url = "http://b8e00a7b5ca8.sn.mynetname.net:3012/jsonstore/menu";

function App() {
  const [menuItems, setmenuItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const items = await response.json();
      setmenuItems(items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
