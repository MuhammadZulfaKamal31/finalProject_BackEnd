// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('../src/config/Database')
const ReplyComment = require('../src/model/ReplyComment')


const router = require('./routes/router');

const app = express();

try {
    ReplyComment.sync()
    console.log("Database Connected");
} catch (error) {
    console.error(error);
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);

app.listen(8800, () => { console.log('Server Running') });
