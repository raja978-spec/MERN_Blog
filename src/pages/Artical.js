import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "./Artical-content";
import Articals from "../components/Articals";
import NotFound from "./404";
import CommentsList from "../components/Commentslist";

const Artical=()=>{
    const {name}=useParams()
    
    const [articalInfo,setarticalInfo]=useState({
        comments:[]
    });
    // this use effect runs only if name of the
    // parameter gets updated
     useEffect(()=>{
        const fecthData= async()=>{
            const res=await fetch(`/api/articles/${name}`)
            const body=(await res).json()
            console.log(body)
            setarticalInfo(body)
        }
        fecthData()
     },[name])

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