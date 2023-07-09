import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'


import Connection from './Database/db.js'
import DefaultData from './default.js';
import route from './Routes/routes.js';


const app = express();
dotenv.config()
app.use(cors())
app.use(express.json())
app.use('/', route)

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const PORT = process.env.PORT || 5000;
Connection(username, password);

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`));

DefaultData()

