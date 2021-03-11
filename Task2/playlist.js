const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistsSchema = new Schema ({
    dateCreated: date,
    songs: [{type: Schema.Types.ObjectId, ref: 'songs'}],
})