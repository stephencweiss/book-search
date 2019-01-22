const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const port = process.argv[2] || 8080;

const app = express();
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));


app.listen(port, () => { console.log(`The express server is listening on port ${port}`)})