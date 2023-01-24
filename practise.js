// var http = require('http')
// http.createServer((req,res)=>{
//     res.Read("hello world htfhfh")
//     res.end()
// }).listen(8080)

// var fs = require('fs')
// fs.writeFile('sample.txt', 'i am swetha', function(err,data){
//    if(err) throw err
//     console.log(data)
// })

// var fs = require('fs')
// fs.writeFile('demo1.txt', 'sample data', function (err, data) {
//     if (err) throw err;
//     console.log(data)
// })

// var fs = require('fs')
// fs.readFile('sample.txt', 'utf-8' ,function(err,data){
//     if (err) throw err
//     console.log(data)
// })


// var fs = require('fs')
// fs.appendFile('sample.txt','from regidi', function(err,data){
//     if(err)throw err
//     console.log(data)
// })

// var fs = require("fs")
// fs.unlink('demo1.txt', function(err,data){
//     if (err) throw err
//     console.log(data)
// })


// var fs= require('fs')
// fs.readFile('sample.txt', 'utf-8', function(err, data){
//     if (err)throw err
//     console.log(data)
// })



//synchronous - In synchronous operations tasks are performed one at a time and only when one 
// is completed, the following is unblocked. In other words, you need to wait for a
// task to finish to move to the next one//

// var fs = require("fs");
// var filedata = fs.readFileSync('sample.txt');
// console.log(filedata.toString());
// console.log("End of Program execution");



// asynchronous -  In asynchronous operations, you can move to another task 
// before the previous one finishes.//

// var fs = require("fs");  
// fs.readFile('sample.txt', 'utf-8', function (err,data) {  
//     if (err) throw err
//     console.log(data);  
// }); 
// console.log("End of Program execution");  


             