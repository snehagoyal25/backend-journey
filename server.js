// const express = require("express");
// const app =express();
// const port = 3000;

// // route

// app.get('/',(req,res)=>{
//     res.send("Hello express");
// });

// app.get('/about',(req,res)=>{
//     res.send("This is about section")
// });


// app.get('/contact',(req,res)=>{
//     res.send("This is contact section")
// });
// // start server 


// // app.listen(3000);
// app.listen(port,()=>{
//     console.log(`Server is running on ${port}`)
// })




const express = require ("express");
const app = express();

// use to parse req.body in express
const bodyparser = require("body-parser");

// Specifically parse JSON data and add it to the request.Body object 
app.use(bodyparser.json()); 




// making routes 

app.get('/',(req,res)=>{
    res.send("Hey there !");

})

app.post('/about/cars',(req,res)=>{
    const {name,brand} = req.body ;
    console.log(name);
    console.log(brand);
    res.send("This is a put request")
})

app.listen(8000,()=>{
    console.log("The server is started at port 8000");
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewurlParser : true,
    useUnifiedTopology : true
})

.then(()=>{
    console.log("Connection Successful")
})

.catch((error)=>{
    console.log("Received an error ")
})
