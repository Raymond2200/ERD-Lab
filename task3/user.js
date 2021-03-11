const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: String,
    password: String,
    playlists: [{type: Schema.Types.ObjectId, ref: 'playlist'}],
    video: [{type: Schema.Types.ObjectId, ref: 'video'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'comments'}]
})