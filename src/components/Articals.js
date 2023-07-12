import React from "react";
import { Link } from "react-router-dom";

const Articals=({article})=>{
    return(
        <>
         <div className="flex flex-wrap -m-4">
       {article.map((arr, index) => (
        <div key={index} className="p-6 md:x-1/2">
           <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
           <Link to={`/artical/${arr.name}`}>
           <b>Topic:</b>{arr.name}
          </Link> 
          <div className="p-4">
            <b>Title:</b>  {arr.title}
           </div>
           </div>
           
        </div>
          
        ))}
       </div>
      
      
        </>
    )
}

export default Articals