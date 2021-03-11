const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema ({
    user: [{type: Schema.Types.ObjectId, ref: 'user'}],
    video: [{type: Schema.Types.ObjectId, ref: 'video'}],
    description: String,
    title: String
})