import React from "react";
import articles from "./Artical-content";
import { Link } from "react-router-dom";

const ArticalList = () => {
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-center">
        {articles.map((arr, index) => (
          <Link to={`/artical/${arr.name}`} key={index}>
            {arr.name}<br></br>
          </Link>
        ))}
      </h1>
    </>
  );
};

export default ArticalList;
