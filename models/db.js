const mongoose = require('mongoose');
//const url = "mongodb://localhost:27017/EmployeeDB";
const url = "mongodb+srv://nhatdev:nMY2oraJCDlq2qEY@cluster0.wxoke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./employee.model');
