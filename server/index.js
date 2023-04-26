const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connect");
const entries_routes = require("./routes/entries");
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const responseTime = require('response-time');



const app = express();
const PORT = process.env.PORT || 5000;

app.get("/",(req,res) => {
    res.send("HI I AM LIVE");
});


app.use(responseTime())
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use("/",entries_routes)

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am Connected`);
        });
    }catch(error){
        console.log(error);
    }
}
start();

