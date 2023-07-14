import React, { useState } from "react";
import { useParams } from "react-router-dom";
import articles from "./Artical-content";
import Articals from "../components/Articals";
import NotFound from "./404";

const Artical=()=>{
    const {name}=useParams()
    var otherArticels="No Articels"
    const con=articles.find(arr=>arr.name===name)
    if (!con) return <NotFound></NotFound>
    otherArticels=articles.filter(arr=> arr.name !== name)
    return(
<>
<p className="mx-auto leading-relaxed text-base mb-4">
      {con.content}
</p>
<h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">Other Articels</h1>
      <div className="flex flex-wrap -m-4">
        <Articals article={otherArticels}></Articals>
    </div>
        
</>

    )
}

export default Artical