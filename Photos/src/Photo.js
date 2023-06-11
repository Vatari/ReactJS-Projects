import React from "react";

const Photo = ({
  urls: { regular },
  alt_desc,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <article className="photo">
      <img src={regular} alt={alt_desc} />
      <div className="photo-info"></div>
    </article>
  );
};

export default Photo;
