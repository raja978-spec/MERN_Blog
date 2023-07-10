import React, { useState } from "react";
import { useParams } from "react-router-dom";
import articles from "./Artical-content";

const Artical=()=>{
    const {name}=useParams()
    var con=""
    articles.forEach((d)=>{
        
        if(d.name===name){
        con=d.content
        }
        else{
            con="Artical doesn't exist"
        }
    })
    return(
<>
<h1 className="sm:text-4xl text-2xl font-bold my-6 text-center">This is {name} artical</h1>
<p className="mx-auto leading-relaxed text-base mb-4">
      {con}
        </p>
        
</>

    )
}

export default Artical