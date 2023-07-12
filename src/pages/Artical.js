import React, { useState } from "react";
import { useParams } from "react-router-dom";
import articles from "./Artical-content";
import Articals from "../components/Articals";

const Artical=()=>{
    const {name}=useParams()
    var con="Artical cannot be found"
    var otherArticels="No Articels"
    articles.map((arr)=>{
     if(arr.name===name){
        con=arr.content
     }
    })
    otherArticels=articles.filter(arr=> arr.name !== name)
    return(
<>
<h1 className="sm:text-4xl text-2xl font-bold my-6 text-center">This is {name} artical</h1>
<p className="mx-auto leading-relaxed text-base mb-4">
      {con}
</p>
<h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">Other Articels</h1>
      <div className="flex flex-wrap -m-4">
        <Articals article={otherArticels}></Articals>
    </div>
        
</>

    )
}

export default Artical