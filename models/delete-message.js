const Message = require('./Message');

async function deleteMessage(messageId) {
    try {
        const result = await Message.deleteOne({ _id: messageId });
        console.log("Message deleted: ", result);
        return result;
    } catch (err) {
        console.error(err);
        return { deletedCount: 0 };
    }
}

module.exports = { deleteMessage };
