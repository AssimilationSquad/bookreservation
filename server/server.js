const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db/db.js');
const Op = require('sequelize').Op;
const path = require('path');

app.use(express.static(path.join(__dirname, '../', 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
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

const getRoomPrice = function(propertyId) {
  return db.Property.findOne({
    where: {
      id: propertyId
    }
  });
};

app.get('/price/:propertyId', function(req, res) {
  let fromDate = req.query.fromDate;
  let toDate = req.query.toDate;
  let dates;
  let propertyId = req.params.propertyId;
  
  if (!!fromDate && !!toDate) {
    dates = getAvailableDates(propertyId, fromDate, toDate);

  } else if (!!fromDate) {
    // missing toDate, fill it in for 30 days after fromDate
    let toDate = new Date(fromDate);
    toDate.setDate(toDate.getDate() + 30);
    dates = getAvailableDates(propertyId, fromDate, toDate);

  } else {
    // missing fromDate and toDate, fill them in from today to 34 days from now. (to fit a 35 day calendar month)
    let toDate = new Date();
    toDate.setDate(toDate.getDate() + 34);
    dates = getAvailableDates(propertyId, new Date(), toDate);
  }

  let price = getRoomPrice(propertyId);

  dates.then((cal) => {
    return cal.map((x) => {
      return {
        date: x.dataValues.date,
        dayPriceModifier: x.dataValues.dayPriceModifier
      };
    });
  })
    .then((cal) => {
      price.then((x) => {
        return {
          basePrice: x.dataValues.basePrice,
          cityTax: x.dataValues.cityTax,
          cleaningFee: x.dataValues.cleaningFee,
          serviceFee: x.dataValues.serviceFee,
          longStayDiscount: x.dataValues.longStayDiscount,
          minStay: x.dataValues.minStay,
          calendar: cal
        };
      })
        .then((data) => {
          res.json(data);
        });
    })
    .catch((err) => {
      console.error(err);
    });
});