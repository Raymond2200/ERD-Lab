const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const copyrightSchema = new Schema ({
    badstanding: [{type: Schema.Types.ObjectId, ref: 'user'}],
    goodstanding: [{type: Schema.Types.ObjectId, ref: 'video'}],
    checkbase:[]
})