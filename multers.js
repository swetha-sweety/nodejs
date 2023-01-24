// const express = require("express");
// const multer = require('multer');
// const app = express();

// const fileStorageEngine =multer.diskStorage({
//     destination:(req, file, cb)=>{
//         cb(null,Date.now() + ".." + file.originalname)
//     }
// })

// const upload = multer({ storage: fileStorageEngine })

// app.post("/single", upload.single("images"),(req,res)=> {
//     console.log(req.file)
//     res.send("single file upload success")
// })



const mysql=require('mysql')
var express=require('express')
var app=express()
const bodyparser=require('body-parser')
var multer=require('multer');
var path=require('path');
app.use(bodyparser.json())

var mysqlConnection=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"root",
    database:"student"

})
mysqlConnection.connect((err)=>{
    if(!err)
    console.log("db connected successfully")
    else
    console.log('db connection failed:'+JSON.stringify(err,undefined,2))
    
})

const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>
    {
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload=multer({
    storage:storage
})

app.post('/postdata',upload.single('filename'),(req,res)=>{

    console.log("incoming values",req.body.filename)
  
  let query=  "insert into fileupload (filename) values ('"+`http://localhost:4000/profile/${req.file.filename}`+"')" 


    console.log("query values",query)
    let result= mysqlConnection.query(query,function(err,data)
    {
    if(!err)
  
    res.send(data)
    
    else{
    console.log(err)
    }
    })
    }
    )
    app.get('/getdata',  (req,res)=>{


        let query =  "select *from  fileupload " 
     mysqlConnection.query(query,function(err,data)
     {
     if(!err)
     
     res.send(data)
     
     else{
         console.log(err)
     }
     })
     })
    app.listen(8552,()=>
    {
        console.log("porting is running on 8000")
    })
  