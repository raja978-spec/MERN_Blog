import React from "react";

const CommentsList=({commets})=>{    
    return(
        <>
        <h3 className="sm:text-2xl text-xl font-bold my-6 text-gray-900">
            Comments:
        </h3>
        {commets.map((comment,index)=>{
            return(
            <>
            <div key={index}>
              <h4 className="text-xl font-bold">{comment.username}</h4>
              <p className="mt-1 mt-4">{comment.text}</p>
            </div>
            </>
            )
        })}
        </>
    )
}
export default CommentsList;