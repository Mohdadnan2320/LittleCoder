const express = require("express");
require("dotenv").config();
const cors = require('cors')
const assistantRoute = require('./routes/assistant')

const app = express();
app.use(express.json());
const allowedOrigins = process.env.ORIGIN.split(",");
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.ORIGIN);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200 
};

app.use(cors(corsOptions))

app.use('/api', assistantRoute)

app.listen(8080, () => console.log("Server running on port 8080"));