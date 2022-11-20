// Loading mongoose package in ram and storing it in mongoose variable 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creating a schema for the user collection in the database
let UserSchema = new Schema({
    // Defining the username field
    username: {
        // Defining the type of the field as String
        type: String
    },
    // Defining the email fieldk
    user_email: {
        // Defining the type of the field as String
        type: String
    },
    // Defining the password field
    password: {
        // Defining the type of the field as String
        type: String
    },
    // Defining the name filed
    name: {
        // Defining the type of the field as String
        type: String
    }
});



// Creating a model for the user collection in the database using UserSchema
const User = mongoose.model('User', UserSchema);

// Exporting the model
/* 

    module.exports is a special object which is included in every JS file in the Node.js application by default.

*/
module.exports = { User };