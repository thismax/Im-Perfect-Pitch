//dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');
//import routes
const router = require('./router');
const db = require('./db/index');
//instantiate express
const app = express();
//middleware
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../static')));
app.use('/songs', router);
//kick up the 4d3d3d3
db.Songs.sync().then(()=>{
  app.listen(5010, () => {
    console.log('max is listening to you on 5010');
  });
});