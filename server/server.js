const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db/db.js');
const Op = require('sequelize').Op;
const path = require('path');

app.use(express.static(path.join(__dirname, '../', 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});



const getAvailableDates = function(propertyId, fromDate, toDate) {
  return db.Calendar.findAll({
    where: {
      propertyId: propertyId,
      available: 1,
      date: {
        [Op.between]: [fromDate, toDate],
      }
      
    }
  });
};

app.get('/price/:propertyId', function(req, res) {
  let dates = getAvailableDates(propertyId, req.body.fromDate, req.body.toDate);
  
  if (!!req.body.fromDate && !!req.body.toDate) {

  } else if (!!req.body.fromDate) {

  } else {

  }
});

