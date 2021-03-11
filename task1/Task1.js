const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const task1Schema = new Schema ({
    title: String,
    content: String,
    download: String,
})