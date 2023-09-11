const express=require('express')
const {MongoClient}=require('mongodb')
const cors = require('cors');
// Fetch is sync built in function used on 
// front end
const path = require('path');
app=express()
app.use(cors());
app.use(express.json())

app.listen(3001,()=>console.log("server running"))

 async function  dataChecker(regno){
    const client = new MongoClient('mongodb+srv://root:1234@cluster0.lime2tf.mongodb.net/');
    await client.connect();
    const db = client.db("QutrixDB");

    const doc =await db.collection('Participants').find({}).sort({"score":-1}).toArray()
    var result=doc.map((d)=>d.regno !== regno ? true:false);
    return result;
}


app.get('/data/:jdata',async(req,res)=>{
    try {
    const Data=req.params.jdata.split(',');
    const client = new MongoClient('mongodb+srv://root:9787@cluster0.lime2tf.mongodb.net/');
    await client.connect();
    const db = client.db("QutrixDB");
    
    const newData={regno:Data[0],name:Data[1],collegename:Data[2],departmentname:Data[3],phoneno:Data[4],score:Data[5],time:Data[6]}
    db.collection('Participants').insertOne(newData,(err,res)=>{
        if(err){console.log(err)};
        console.log("Inserted")
    })
   
    } 
    catch (error) {
       res.status(500).json({"error":error})
       console.log(error) 
    }
    
})

app.get('/get',(req,res)=>{
    res.josn({msg:"Hello world"})
})
app.post('/data/:regno/:score/:timespend',async(req,res)=>{
    
    try{
    const Regno=req.params.regno;
    const Score=req.params.score;
    const timeSpend=req.params.timespend;
    
    const client = new MongoClient('mongodb+srv://root:9787@cluster0.lime2tf.mongodb.net/');
    await client.connect();
    const db = client.db("QutrixDB");

    const getter={regno:Regno}
    const newData={$set:{score:Score,time:`${timeSpend} sec for 1500 sec`}}
    
    db.collection('Participants').findOneAndUpdate(getter,newData,(err,res)=>{
        if(err){ console.log(err)};
        
        console.log("Updated")
        
    })
    
    
}


catch(err){
    console.log(err)
}
})


app.get('/score',async(req,res)=>{

    try{
    const client = new MongoClient('mongodb+srv://root:9787@cluster0.lime2tf.mongodb.net/');
    await client.connect();
    const db = client.db("QutrixDB");

    const doc =await db.collection('Participants').find({}).sort({"score":-1}).toArray()
    res.status(200).json(doc);   
    }
    catch(err){
        console.log(err);
    } 
})
/*
app.get('/api/articles/:name',async(req,res)=>{
try {
    const Name=req.params.name;
    const client = new MongoClient('mongodb://127.0.0.1:27017');
await client.connect();
const db = client.db("MernBlog");
const collec = db.collection('Articels');
const data=await collec.findOne({name:Name})
client.close();
res.status(200).json(data)

} catch (error) {
   res.status(500).json({"error":error}) 
}
    
})

app.post('/api/:name/artical-comments',async(req,res)=>{
    const {username,comments}=req.body 
    const Name=req.params.name;
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    const db = client.db("MernBlog");
    const collec = db.collection('Articels');
    const updata=await collec.findOneAndUpdate({name:Name},{$set:{
        comment:(collec.comment || []).concat({
            username:username,
            comments:comments
        })
}})

        res.status(200).send({"data":await collec.findOne({name:Name})})
    
    
})
app.post('/',(req,res)=>res.send(`Hello ${req.body.name}`))
app.listen(5001,()=>console.log("Server running"))
*/


/*

   Create login page with these details, 
   all the values
   are stored into mongodb,atlast score
   should be stored 

   1- login (regno primary key, 
      name, collegename,
      department, score-default 0   


   2- Create table that should reterive all
      details, reterives and show highest score
      student details name.
*/

