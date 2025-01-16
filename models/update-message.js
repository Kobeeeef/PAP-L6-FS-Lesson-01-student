const Message = require('./Message');

async function updateMessage(messageId, newMessage) {
    try {
        const result = await Message.updateOne({ _id: messageId }, newMessage);
        console.log("Message updated: ", result);
        return result;
    } catch (err) {
        console.error(err);
        return {
            modifiedCount: 0,
            acknowledged: false
        };
    }
}

module.exports = { updateMessage };
