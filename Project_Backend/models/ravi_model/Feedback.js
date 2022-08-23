const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;


const feedbackSchema = new Schema({

    feedbackid : {
        type : String,
        required: true
    },

    name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },

    date : {
        type : String,
        required:true
    },
    
    contactno : {
        type : String,
        required:true
    },

    feedbacktype : {
        type : String,
        required:true
    },

    feedbackorinquiry : {
        type : String,
        required:true
    },

    reply : {
        type : String,
        default:"pending"
    }

    

})

const Feedback = mongoose.model("Feedback",feedbackSchema);

module.exports = Feedback;