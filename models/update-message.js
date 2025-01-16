const { getCollection } = require('../connect'); // Practice Session Exercise 2.1
const { ObjectId } = require('mongodb'); // Practice Session Exercise 2.2

async function updateMessage(messageId, newMessage) {
    const db = getCollection(); // Practice Session Exercise 2.3
    const documentId = ObjectId.createFromHexString(messageId); // Practice Session Exercise 2.4
    try {
        const result = await db.updateOne({ _id: documentId }, { $set: newMessage }); // Practice Session Exercise 2.5 & 2.6
        console.log("Message updated: ", result);
        return result;
    } catch (err) {
        console.error(err);
        return {
          modifiedCount: 0,
          acknowledged: false
        }
    }
}

module.exports = { updateMessage };