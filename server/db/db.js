const Sequelize = require('sequelize');
const config = require('../../config.js');
const db = new Sequelize(
  config.db.name, 
  config.db.user, 
  config.db.password, 
  {
    dialect: config.db.dialect,
    host: config.db.ip,
  }
);

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


exports.Property = Property;
exports.Calendar = Calendar;