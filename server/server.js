const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
//eventually will need to import router, db
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
//will eventually need to include router middleware
app.use(express.static(path.resolve(__dirname, '../static')));
app.listen(1337, () => {
  console.log('max is listening to you on 1337');
});