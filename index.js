const express = require("express")
const app= express()
const bp = require("body-parser")
app.use(bp.json())
const path= require("path")


let data = [];


app.use("/index",express.static(path.join(__dirname, "public")))

app.get("/todoitem",(req, res)=>{
    res.send(JSON.stringify(data))
})

app.post("/todoitem",(req, res)=>{
    const task= req.body
    data.push(task)
})

app.delete("/todoitem/:id",(req, res)=>{
    const del_id= req.params.id
    let new_data= data.filter((item)=>item.id!==del_id)
    data=new_data
})





app.listen(3001, ()=>console.log("server started !"))