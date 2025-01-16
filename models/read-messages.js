const Message = require('./Message');

async function getAllMessages(isSecret) {
    try {
        if (isSecret == "true" || isSecret == true) {
            isSecret = true;
        } else if (isSecret == "false" || isSecret == false) {
            isSecret = false;
        }
        const results = await Message.find({ secret: isSecret }).sort({ date: -1 }).exec();
        return results;
    } catch (err) {
        console.error(err);
        return [];
    }
}

module.exports = { getAllMessages };
