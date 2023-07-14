const express=require('express')
const {MongoClient}=require('mongodb')

app=express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("<h1>Hello world</h1>")
})

app.get('/api/articles/:name',async(req,res)=>{
try {
    const Name=req.params.name;
    const client = new MongoClient('mongodb://127.0.0.1:27017');
await client.connect();
const db = client.db("MernBlog");
const collec = db.collection('Articels');
const data=await collec.findOne({name:Name})
    res.status(200).send({"data":data})

} catch (error) {
   res.status(500).send({"err":error}) 
}
    
})

app.post('/api/:name/artical-comments',(req,res)=>{
    const {name,comment}=req.body 
    articelcomment[req.params.name].comment.push({"username":name,"comment":comment})
    res.status(200).send(articelcomment[req.params.name])
})
app.post('/',(req,res)=>res.send(`Hello ${req.body.name}`))
app.listen(5000,()=>console.log("Server running"))