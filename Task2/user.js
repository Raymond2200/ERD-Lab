const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistsSchema = new Schema ({
    username: String,
    password: String,
    playlists: [{type: Schema.Types.ObjectId, ref: 'playlist'}],
})