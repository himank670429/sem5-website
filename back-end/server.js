const express = require('express')
const app = express();
const cors = require('cors');
const Data = require('./data_model')
const mongoose = require('mongoose')
require('dotenv').config();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_URI)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/data', (req, res) => {
    Data.find()
    .then(data => res.status(200).send(data))
})  

const port = process.env.PORT || 3001
app.listen(port);