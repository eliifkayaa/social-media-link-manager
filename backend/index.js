const connection = require('./database/db');
const express = require('express');
const cors = require('cors');

//Routes
const socialMediaRouter = require("./routers/social.router")
const authRouter = require("./routers/auth.router");

//Api istekleri için:
const app = express();

//İsteklerde JSON formatı
app.use(express.json());

//CORS hataları önlemek için
app.use(cors());

//DB Connection
connection();

//Social Media Routes
app.use("/api/socialmedia/", socialMediaRouter);
app.use("/api/auth/", authRouter);

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log("Server is running"))
