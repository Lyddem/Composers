const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000 || PROCESS.ENV.PORT;
const bodyParser = require('body-parser');
const path = require('path');
// const db = require('./database/index.js');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'YES',
  password: '',
  database: 'composers'
})

app.use(bodyParser.json());

app.use(express.static('dist'));

// app.get('/', () => {

// })

app.listen(3000, () => {
  console.log('listening on port ' + PORT);
})
