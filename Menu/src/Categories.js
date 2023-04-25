import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((categorie, i) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={i}
            onClick={() => filterItems(categorie)}
          >
            {categorie}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
