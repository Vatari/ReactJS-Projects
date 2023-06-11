import React from "react";

const Photo = ({ urls: { regular }, alt_desc }) => {
  return (
    <article className="photo">
      <img src={regular} alt={alt_desc} />
    </article>
  );
};

export default Photo;
