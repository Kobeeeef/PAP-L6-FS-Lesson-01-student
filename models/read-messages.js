const { getCollection } = require('../connect'); // Exercise 4.1

async function getAllMessages(isSecret) {
    const db = getCollection(); // Exercise 4.2
    try {
        if (isSecret == "true" || isSecret == true) {
            isSecret = true;
        } else if (isSecret == "false" || isSecret == false) {
            isSecret = false;
        }
        const results = await db.find({ secret: isSecret }).sort({date:-1}).toArray(); // Exercise 4.3
        return results;
    } catch (err) {
        console.error(err);
        return [];
    }
}

module.exports = { getAllMessages };