import React from "react";
import articles from "./Artical-content";
import Articals from "../components/Articals";

const ArticalList = () => {
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
Artical
      </h1>
      <div className="container py-4 mx-auto">
        <Articals article={articles}></Articals>
      </div>
        
     
    </>
  );
};

export default ArticalList;
