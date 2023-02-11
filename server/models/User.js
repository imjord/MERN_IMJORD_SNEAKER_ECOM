const {Schema, model} = require('mongoose');



const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});


const User = new model('User', UserSchema);


module.exports = User;