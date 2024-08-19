const connection = require('./database/db');
const express = require('express');
const cors = require('cors');

//Api istekleri için:
const app = express();

//İsteklerde JSON formatı
app.use(express.json());

//CORS hataları önlemek için
app.use(cors());

//DB Connection
connection();

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log("Server is running"))
