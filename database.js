// var express = require('express');
// var app = express();
// var bodypareser= require('body-parser')
// app.use(bodypareser.json())
// var mysql = require('mysql')
// var connection = mysql.createConnection({
//     host: 'localhost',
//     // port: '3302',
//     user: 'root',
//     password: 'root',
//     database: 'student'
// })

// connection.connect((err) => {
//     if (!err) {
//         console.log('connected');
//     } else {
//         console.log(err);
//     }
// })


// app.get('/getData', (req, res) => {
//     let query = 'select * from new_table';
//     connection.query(query, (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(data);
//         }
//     })
// }).listen(8089)


// app.post('/postData', (req, res) => {
//     let query = 'INSERT INTO new_table (id,name,address) VALUES("'+req.body.id+'","'+req.body.name+'","'+req.body.address+'")';
//     connection.query(query, (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(data);
//         }
//     })
// }).listen(8088)


// app.delete('/deleteData/:id',(req,res)=>{
//     let query = `delete from students where id=${req.params.id}`;
//     connection.query(query, (err) => {
//     if (!err) res.send({ message: 'successfully created' });
//     else res.status(400).send(err)
//     })
//     })

// app.put('/putdata?:id',(req,res)=>{
//     // let query = `update students set name=${req.body.name},roll_no=${req.body.roll_no},branch=${req.body.branch} where id=${req.query.id}`;
//     connection.query(query, (err) => {
//     if (!err) res.send({ message: 'successfully created' });
//     else res.status(400).send(err)
//     }) 
//     })

//     app.listen(8082);




var express = require('express')
var app = express();
var bodypareser = require('body-parser')
app.use(bodypareser.json())
mysql = require('mysql')
var swaggerJsDoc = require('swagger-jsdoc');
var swaggerUI = require('swagger-ui-express');
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Library API',
            version: '1.0.0'
        }
    },
    apis: ['database.js'],
}

const swaggerDoc = swaggerJsDoc(swaggerOptions);
// console.log(swaggerDoc);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDoc))

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'student'
})
connection.connect(function (err, data) {
    if (!err) {
        console.log('connected')
    }
    else {
        console.log(err)
    }
})

/** 
* @swagger 
* /getdata:
*   get: 
*     description: Get all person
*     responses:  
*       200: 
*         description: Success  
*   
*/

app.get('/getdata', function (req, res) {
    let query = 'select * from employee'
    connection.query(query, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    })
})


app.post('/postdata', function (req, res) {
    let query = 'INSERT INTO employee (idemployee,name,age,designation) VALUES ("' + req.body.idemployee + '","' + req.body.name + '","' + req.body.age + '","' + req.body.designation + '")';
    connection.query(query, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    })
})


app.put('/putdata?:id', function (req, res) {
    let query = `update employee set name=${req.body.name},age=${req.body.age},designation=${req.body.designation} where idemployee=${req.body.idemployee}`;
    connection.query(query, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    })
})


app.put('/putdata?:id',function(req,res){
    let query = `update employee set name=${req.body.name},age=${req.body.age},designation=${req.body.designation} where idemployee=${req.body.idemployee}`
    connection.query(query,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})



app.delete('/deleteData/:id',(req,res)=>{
        let query = `delete from employee where idemployee=${req.body.idemployee}`;
        connection.query(query, (err) => {
        if (!err) res.send({ message: 'successfully created' });
        else res.status(400).send(err)
        })
})

app.listen(8088)




// var express = require('express')
// var app = express();
// var bodypareser = require('body-parser')
// app.use(bodypareser.json())
// mysql = require('mysql')
// var connection = mysql.createConnection({
//     host: 'localhost',
//     port: '3306',
//     user: 'root',
//     password: 'root',
//     database: 'student'
// })
// connection.connect(function (err, data) {
//     if (!err) {
//         console.log('connected')
//     }
//     else {
//         console.log(err)
//     }
// })

// app.get('/getdata', function (req, res) {
//     let query = 'select * from employeedets';
//     connection.query(query, (err) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(data)
//         }
//     })
// }).listen(8083)

// app.post('/postdata',function(req,res){
//     let query = 'INSERT INTO employeedets(id,name,address) VALUES ("'+ req.body.id +'","'+ req.body.name +'","'+ req.body.address+'")'
//     connection.query(query,(err)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log(data)
//         }
//     }) 
// }).listen(8085)

// app.put('/updatedata?:id',function(req,res){
//     // let query = `update employee set name=${req.body.name},age=${req.body.age},designation=${req.body.designation} where idemployee=${req.body.idemployee}`
//     let query= `update employeedet set name=${req.body.name}, address=${req.body.address} where id=${req.body.id}`
//     connection.query(query,(err)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log(data)
//         }
//     })
// }).listen(8084)

// app.delete('/deletedata/:id',function(req,res){
//     let query = `delete from employeedet where id =${req.body.id}`;
//     connection.query(query,(err)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log(data)
//         }
//     })
// }).listen(8087)





