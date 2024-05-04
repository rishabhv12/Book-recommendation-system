const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
/* configure body-parser */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const { auth_route, user_route, book_route, shelf_route } = require('./routes');

app.use('/api/v1/auth', auth_route);
app.use('/api/v1/users', user_route);
app.use('/api/v1/books', book_route);
app.use('/api/v1/shelf', shelf_route);


/* connecting to the database */
mongoose.connect("mongodb://localhost:27017/book-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get("/check" , (req,res)=>{
    res.send("The application is up and running ");
})
/* listen for requests */
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});