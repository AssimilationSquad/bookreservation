const Sequelize = require('sequelize');
const db = new Sequelize('lairbnbCal', 'root', 'password', {
  dialect: 'mysql',
});

var Property = db.define('Property', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  basePrice: Sequelize.INTEGER,
  cityTax: Sequelize.INTEGER,
  cleaningFee: Sequelize.INTEGER,
  serviceFee: Sequelize.DECIMAL,
  longStayDiscount: Sequelize.DECIMAL,
  minStay: Sequelize.INTEGER,
});

var Calendar = db.define('Calendar', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  date: Sequelize.DATEONLY,
  dayPriceModifier: Sequelize.INTEGER,
  available: Sequelize.BOOLEAN,
});

Calendar.belongsTo(Property);
Property.hasMany(Calendar);

Property.sync();
Calendar.sync();

exports.Property = Property;
exports.Calendar = Calendar;