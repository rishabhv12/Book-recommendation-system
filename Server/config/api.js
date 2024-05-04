const dotenv = require('dotenv');
dotenv.config();


module.exports = {
    api: {
        jwt_secret: process.env.JWT_SECRET,
    }
};