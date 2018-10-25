const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '../public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

app.get('/', function (req, res) {
  res.send('hi');
});

