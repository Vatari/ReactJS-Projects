import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
//import items from "./data";

const url = "http://b8e00a7b5ca8.sn.mynetname.net:3012/jsonstore/menu";

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const items = await response.json();
      setMenuItems(items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const categories = [
      "All",
      ...new Set(Object.values(menuItems).map((i) => i.category)),
    ];
    setCategories(categories);
  }, [menuItems]);

  const filterItems = (category) => {
    if (category === "All") {
      fetchData();
    }
    const newItems = Object.values(menuItems).filter(
      (item) => item.category === category
    );
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
