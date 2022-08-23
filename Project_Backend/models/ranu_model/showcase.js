const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const Schema = mongoose.Schema;

const showcaseSchema =  new Schema({

    drugid : {
        type : String,
        require:true
    },

    drugname : {
        type : String,
        require:true
    },

    quantity : {
        type : Number,
        require:true
    },


    EXD : {
        type : String,
        require:true
    }





})

const showcase = mongoose.model("showcase", showcaseSchema);

module.exports = showcase;