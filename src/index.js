// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const db = require('../src/config/Database')
const ReplyComment = require('../src/model/ReplyComment')
const Favorite = require('../src/model/Favorite')


const router = require('./routes/router');
//untuk menggunakan .env
dotenv.config()
const app = express();


//agar semua datanya bisa di generate terus dan kalau force: true maka semua datanya bakal dihapus
try {
    db.sync({ force: false });
    Favorite.sync()
    console.log("Database Connected");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//supaya bisa akses cookienya
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

app.use('/', router);


app.listen(8800, () => { console.log('Server Running') });
