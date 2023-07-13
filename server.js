const express=require('express')
const {MongoClient}=require('mongodb')

app=express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("<h1>Hello world</h1>")
})

app.get('/api/articles/:name',async(req,res)=>{
try{
  const articalName=req.params.name;
  const database= await MongoClient.connect('mongodb://localhost:27017')
  const db=database.db('Mernblog');
  const data=await db.collection('Articels').findOne({name:articalName})
  res.status(200).json(data)
  database.close()
}
catch (error){
    res.status(500).json({message:"Error",Error:error})
}
})

app.post('/api/:name/artical-comments',(req,res)=>{
    const {name,comment}=req.body 
    articelcomment[req.params.name].comment.push({"username":name,"comment":comment})
    res.status(200).send(articelcomment[req.params.name])
})
app.post('/',(req,res)=>res.send(`Hello ${req.body.name}`))
app.listen(5000,()=>console.log("Server running"))