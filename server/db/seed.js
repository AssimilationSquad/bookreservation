const db = require('./db.js');

const seed = function(n) {
  db.Property.sync();
  db.Calendar.sync();

  const genRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const props = [];
  const cals = [];

  for (let i = 1; i <= n; i++) {
    let prop = {
      id: i,
      basePrice: genRandomInt(10, 100) * 500,
      cityTax: genRandomInt(0, 1) * genRandomInt(1, 3) * 1000,
      cleaningFee: genRandomInt(0, 1) * genRandomInt(0, 5) * 500,
      serviceFee: genRandomInt(5, 20) / 100,
      longStayDiscount: genRandomInt(0, 1) * genRandomInt(0, 1) * genRandomInt(85, 100) / 100,
      minStay: genRandomInt(1, 2),
    };

    props.push(prop);
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < 100; j++) {
      let date = new Date('2018-11-01');
      date.setDate(date.getDate() + j);

      const getDayPriceMod = function() {
        if (date.getDay() === 6 || date.getDay() === 5) {
          return genRandomInt(0, 1) * genRandomInt(1, 5) * 1000;
        } else {
          return 0;
        }
      };

      let cal = {
        id: (i - 1) * 100 + j,
        date: date.toISOString(),
        dayPriceModifier: getDayPriceMod(),
        available: Boolean(1 - genRandomInt(0, 1) * genRandomInt(0, 1)),
        PropertyId: i
      };

      cals.push(cal);
    }
  }

  db.Property.bulkCreate(props)
    .then(() => {
      console.log('property seeding success');
      db.Calendar.bulkCreate(cals)
        .then(() => {
          console.log('calendar seeding success');
        });
    });
};

// const mysql = require('mysql2/promise');
// const config = require('../../config.js');

// mysql.createConnection({
//   user: config.db.user,
//   password: config.db.password
// })
//   .then(() => {
//     connection.query(`CREATE DATABASE IF NOT EXISTS ${config.db.name};`)
//       .then(() => {
//         seed(100);
//       });
//   });

seed(100);