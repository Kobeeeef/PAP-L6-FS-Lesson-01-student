const Message = require('./Message');

async function createNewMessage(newMessage) {
    try {
        const result = await Message.create(newMessage);
        console.log("Message inserted: ", result);
        return result;
    } catch (err) {
        console.error(err);
        return { _id: -1 };
    }
}

module.exports = { createNewMessage };
