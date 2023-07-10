import React from "react";
import articles from "./Artical-content";
const ArticalList=()=>{
    return(
<>
{
articles.map((arr)=>
{
<h1 className="sm:text-4xl text-2xl font-bold my-6 text-center">
{arr.name}
</h1>
})
}
</>
    )
}

export default ArticalList