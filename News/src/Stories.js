import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading, hits } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story;
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} Points by <span>{author} | </span>
            </p>{" "}
            {num_comments} comments
            <div>
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more...
              </a>
              <button className="remove-btn">Remove</button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
