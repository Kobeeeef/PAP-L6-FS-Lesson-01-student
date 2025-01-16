require('dotenv').config();

const collectionName = process.env.COLLECTION_NAME;
const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    message: String,
    user: String,
    date: Date,
    secret: Boolean
});

const Message = model('Message', messageSchema, collectionName);

module.exports = Message;
