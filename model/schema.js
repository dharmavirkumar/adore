
const mongoose = require("mongoose");
const trySchema = mongoose.Schema({
    name: {
        type: String,
       
    },
    phone: {
        type: String,
        
    },

    address:{
        type: String,
        
    },
    message: {
        type: String,
        
    },
    email:{
        type: String,
        

    },
    password:{
        type:String,
        
    },
    confirm_password:{
        type:String,
    

    }
})

module.exports = mongoose.model("Useritem", trySchema); // Export the model for use in other files