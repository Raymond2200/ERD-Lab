const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema ({
    user: [{type: Schema.Types.ObjectId, ref: 'user'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'comments'}],
    copytight: [{type: Schema.Types.ObjectId, ref: 'copyright'}],
    description: String,
    title: String
})