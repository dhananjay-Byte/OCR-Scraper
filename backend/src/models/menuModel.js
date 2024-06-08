const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  item: String,
  price: String,
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
