const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const connectDB = (URL)=>{
    return mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
}

module.exports = connectDB;


