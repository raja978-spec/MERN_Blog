const express=require('express')
app=express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("<h1>Hello world</h1>")
})

const articelcomment={
    "learn-react":{
        comment:[],
    },
    "learn-node":{
        comment:[],
    },
    "my-thougths-on-node":{
        comment:[],
    },
}
app.post('/api/:name/artical-comments',(req,res)=>{
    const {name,comment}=req.body 
    articelcomment[req.params.name].comment.push({"username":name,"comment":comment})
    res.status(200).send(articelcomment[req.params.name])
})
app.post('/',(req,res)=>res.send(`Hello ${req.body.name}`))
app.listen(5000,()=>console.log("Server running"))