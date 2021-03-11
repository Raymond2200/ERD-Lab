const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songsSchema = new Schema ({
    albums: [{type: Schema.Types.ObjectId, ref: 'albums'}],
    artists: [{type: Schema.Types.ObjectId, ref: 'artists'}],
})