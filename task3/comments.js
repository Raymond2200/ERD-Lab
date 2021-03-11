const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema ({
    user: [{type: Schema.Types.ObjectId, ref: 'user'}],
    subcomments: String,
})