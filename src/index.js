// require('dotenv').config();
const express = require('express');
const cors = require('cors');
<<<<<<< HEAD
const db = require('../src/config/Database')
const ReplyComment = require('../src/model/ReplyComment')
const Favorite = require('../src/model/Favorite')
=======
>>>>>>> 5893f3e2ec949d8a7dff78a949f67e28e41420ae


const router = require('./routes/router');

const app = express();

// try {
//     ReplyComment.sync()
//     console.log("Database Connected");
// } catch (error) {
//     console.error(error);
// }

//agar semua datanya bisa di generate terus kalau setle true maka semua datanya bakal dihapus
try {
<<<<<<< HEAD
    db.sync({ force: false });
    Favorite.sync()
=======
>>>>>>> 5893f3e2ec949d8a7dff78a949f67e28e41420ae
    console.log("Database Connected");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);


app.listen(8800, () => { console.log('Server Running') });
