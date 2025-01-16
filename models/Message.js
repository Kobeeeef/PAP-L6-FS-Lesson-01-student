const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  /* #2 */
});

const Message = model('Message', messageSchema);
module.exports = Message;