const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    url: "mongodb://localhost:27017/book-app",
}

// sudo docker run -d \
// -p 27017:27017 \
// --name mongodb \
// --net mongo-network \
// mongo 

// sudo docker run -d \
// -p 8081:8081 \
// --net mongo-network \
// --name mongo-express \
// -e ME_CONFIG_MONGODB_SERVER=mongodb \
// mongo-express