const express = require('express')
const app = express()

//built in middleware
app.use(express.json());

let mwfun1 = (req,res,next)=>{
    //"surname":"A", 
    req.body.surname = "A"; // We have created new property in req obj 
    next();
}
let mwfun2 = (req,res,next)=>{
    //"address":"B", 
    req.body.address = "B";
    next();
}
let mwfun3 = (req,res,next)=>{
    //"contact":"C",
    req.body.contact = "C";
    next();
}
let mwfun4 = (req,res,next)=>{
    //"fname":"D", 
    req.body.fname = "D";
    next();
}
let mwfun5 = (req,res,next)=>{
    //"mname":"E"
    req.body.mname = "E";
    next();
}


app.post('/getmyname',mwfun1,mwfun2,mwfun3,mwfun4,mwfun5, function (req, res) {
    //console.log(req.body.name);
    res.send({
        "name": req.body.name,
        "surname":req.body.surname,
        "address":req.body.address,   	
        "contact":req.body.contact,     
        "fname":req.body.fname,            
        "mname":req.body.mname
    })
})

let port = 3000;
app.listen(port,()=>{
    console.log(`The Server is running on port ${port} `);
})