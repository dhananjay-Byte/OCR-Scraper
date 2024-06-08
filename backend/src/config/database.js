const { MongoClient } = require('mongodb');
require('dotenv').config()
const client = new MongoClient(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

async function storeData(data) {
  try {
    await client.connect();
    const db = client.db('restaurantMenus');
    const collection = db.collection('menus');
    await collection.insertMany(data);
  } finally {
    await client.close();
  }
}

module.exports = { storeData };
