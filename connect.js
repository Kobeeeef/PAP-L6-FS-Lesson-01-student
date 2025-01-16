// Exercise 2.1
require('dotenv').config();
// Exercise 2.2
// Exercise 2.3

let mongooseConnection = null;

async function connectMongoose() {
    try {
        null; // Ex. 2.4 (replace null with the correct code)

        mongooseConnection = mongoose.connection;
        mongooseConnection.on('error', (e)=>console.error(e));
        mongooseConnection.on('SIGINT', ()=>autoDisconnect(mongooseConnection, 'app'));
        mongooseConnection.on('SIGHUP', ()=>autoDisconnect(mongooseConnection, 'terminal'));
        mongooseConnection.on('SIGTERM', ()=>autoDisconnect(mongooseConnection, 'system'));
        console.log("Connected to database.")
    }
    catch (e) {
        console.error(e);
        if (mongooseConnection !== null) {
            mongooseConnection.close(()=>autoDisconnect(mongooseConnection, 'error-based'));
            mongooseConnection = null;
        }
    }

    function autoDisconnect(mongooseConnection, reason) {
        mongooseConnection.close(() => {
            console.log(`Mongoose connection closed through ${reason} termination`);
        });
    }
}

// Exercise 2.5 module.exports = {  }; 