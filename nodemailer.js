var nodemailer= require('nodemailer')
var transporter=nodemailer.createTransport({
    host:'smtp.gmail.com',
    service:'gmail',
    auth:{
        user:'swetharugada@gmail.com',
        pass:'rleqbxrfccnopxgn'
    }
})

var mailoptions={
    from:'swetharugada@gmail.com',
    to:'swetharugada@gmail.com',
    text:'Welcome to nodemailer'
}

transporter.sendMail(mailoptions,(error,info)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('email sent'+info.response)
    }
})



// var nodemailer = require("nodemailer")

// var transporter = nodemailer.createTransport({

//     host: "smtp.gmail.com",
//     port: 2525,
//     // secure: false, // true for 587, false for other ports
//     service: 'gmail',
//     auth: {
//         user: 'swetharugada@gmail.com',
//         pass: 'vkyoezzevxfzihhd'
//     },
//     // tls: {
//     //     rejectUnauthorized: true,
//     // }

 
// })

// var options = {
//     from: 'swetharugada@gmail.com',
//     to: 'srivaniambati10@gmail.com',
//     subject: 'test mail',
//     text: 'Thats easy to use'
// }
// console.log(options)

// transporter.sendMail(options, (err, info) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("email is sent" + info.response)
//     }
// })




