const { getCollection } = require('../connect'); // Practice Session Exercise 3.1
const { ObjectId } = require('mongodb'); // Practice Session Exercise 3.2

async function deleteMessage( messageId) {
    const db = getCollection(); // Practice Session Exercise 3.3
    const documentId = ObjectId.createFromHexString(messageId); // Practice Session Exercise 3.4
    try {
        const result = await db.deleteOne({ _id: documentId }); // Practice Session Exercise 3.5 & 3.6
        console.log("Message deleted: ", result);
        return result;
    } catch (err) {
        console.error(err);
        return {deletedCount: 0};
    }
}

module.exports = { deleteMessage };