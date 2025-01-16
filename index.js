const cors = require('cors');
const express = require('express');
const { connectMongoose } = require('./connect');

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

// Home dynamic route to get public or secret messages
const read = require('./models/read-messages');
app.get('/:secret', async (req, res) => {

    const results = await read.getAllMessages(req.params.secret);
    res.send(results);

    console.log("GET request received on home page");
});


// Post route to post a new message
const creator = require('./models/create-message');
app.post('/message', async (req, res) => {

    const newMessage = req.body;
    const results = await creator.createNewMessage(newMessage);
    res.sendStatus(201);

    console.log("POST request received on message route")
    console.log(`New message created with id: ${results._id}`);
});


// Update route to update an existing message
const updater = require('./models/update-message');
app.patch('/message/:id', async (req, res) => {

    const messageUpdate = req.body;
    const results = await updater.updateMessage(req.params.id, messageUpdate);
    res.sendStatus(200);

    console.log("PATCH request received on message route")
    console.log(`Message with id ${req.params.id} updated`);
});


// Delete route to delete an existing message
const deleter = require('./models/delete-message');
app.delete('/message/:id', async (req, res) => {

    const results = await deleter.deleteMessage(req.params.id);
    res.sendStatus(200);

    console.log("DELETE request received on message route")
    console.log(`Message with id ${req.params.id} deleted`);
});



//* ********************* Launching the server **************** */

const start = async () => {
    try {
        await connectMongoose(); //Exercise 2.7 run the new connect function
        app.listen(port, () => console.log(`Server running on port ${port}...`));
    }
    catch (err) {
        console.error(err);
    }
}

start();