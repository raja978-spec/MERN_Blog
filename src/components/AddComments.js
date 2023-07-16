import { useState } from "react";

const AddCommentForm=({name,setArticle})=>{
    
    const [username,setUsername]=useState('')
    const[commentText,setComment]=useState('')

    const addComment=async()=>{
        const res=fetch(`/api/${name}/artical-comments`,{
            method:"post",
            body:JSON.stringify({username,text:commentText}),
            headers:{
                "Content-Type": "application/json",
            },
        })
        const body=(await res).json();
        setArticle(body)
        setUsername('')
        setComment('')
        
    }
    return(
        <form className="shadow rounded px-8 pt-6 pb-8 mb-4">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Add a comment</h3>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input type="text" value={username}
          onChange={(e)=>setUsername(e.target.value)}
          className="shadow apperance-none border rounded x-full py-2 px-3
          text-gray-700 leadingtight focus:outline-none focus:shadow-outline"></input>
        <label className="block text-gray-700 text-sm font-bold mb-2">
            Comment:
        </label>
        <textarea rows='4' cols="50" className="shadow apperance-none border rounded x-full py-2 px-3
          text-gray-700 leadingtight focus:outline-none focus:shadow-outline"
          value={commentText} onChange={(e)=>setComment(e.target.value)}></textarea>
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold
        py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={()=>addComment()}>Submit</button>
        </form>
    )
}

export default AddCommentForm