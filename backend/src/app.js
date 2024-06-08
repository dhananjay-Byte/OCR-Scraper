const express = require('express');
const multer = require('multer');
const cors = require('cors')
const imageRoutes = require('./routes/imageRoutes');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.json());
app.use('/images', imageRoutes);
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

module.exports = app;
