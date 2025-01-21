require('dotenv').config();
const { Schema, model } = require('mongoose');
const connectMongoose = require('./connect.js');

const collectionName = process.env.COLLECTION_NAME;

const messageSchema = new Schema({
    message: String,
    user: String,
    date: Date,
    secret: Boolean
});

class MessageClass {
    static async readAll(isSecret) {
        try {
            if (isSecret === "true" || isSecret === true) {
                isSecret = true;
            } else if (isSecret === "false" || isSecret === false) {
                isSecret = false;
            }
            return await this.find({ secret: isSecret }).sort({ date: -1 }).exec();
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    static async createNew(newMessage) {
        try {
            const result = await this.create(newMessage);
            console.log("Message inserted: ", result);
            return result;
        } catch (err) {
            console.error(err);
            return { _id: -1 };
        }
    }

    static async update(messageId, messageUpdate) {
        try {
            const result = await this.updateOne({ _id: messageId }, messageUpdate);
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
    static async delete(messageId) {
        try {
            const result = await this.deleteOne({ _id: messageId });
            console.log("Message deleted: ", result);
            return result;
        } catch (err) {
            console.error(err);
            return { deletedCount: 0 };
        }
    }
}

messageSchema.loadClass(MessageClass);

const Message = model('Message', messageSchema, collectionName);

module.exports = Message;
