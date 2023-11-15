const mongoose = require("mongoose")

const connectionDB = () => {
    return mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,  
        useUnifiedTopology: true, 
    })
        .then((data) => {
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        });
}

module.exports = connectionDB