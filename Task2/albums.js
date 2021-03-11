const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumsSchema = new Schema ({
    artists: [{type: Schema.Types.ObjectId, ref: 'artists'}],
    songs: [{type: Schema.Types.ObjectId, ref: 'songs'}],
})