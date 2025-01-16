const { getCollection } = require('../connect'); // Practice Session Exercise 1.1

async function createNewMessage(newMessage) {
    const db = getCollection(); // Practice Session Exercise 1.2
    try {
        const result = await db.insertOne(newMessage); // Practice Session Exercise 1.3
        console.log("Message inserted: ", result);
        return result;
    } catch (err) {
        console.error(err);
        return {_id: -1}
    }
}

module.exports = { createNewMessage }