const express=require('express')
app=express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("<h1>Hello world</h1>")
})
app.post('/',(req,res)=>res.send(`Hello ${req.body.name}`))
app.listen(5000,()=>console.log("Server running"))