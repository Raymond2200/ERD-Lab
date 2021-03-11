const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistsSchema = new Schema ({
    albums: [{type: Schema.Types.ObjectId, ref: 'albums'}],
    songs: [{type: Schema.Types.ObjectId, ref: 'songs'}],
})