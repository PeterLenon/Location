const mongoose = require('mongoose');
const { Schema } = mongoose;

// Connect to MongoDB

let url = "mongodb://localhost:27017/locationTW";

let connectToDb = () =>{
    mongoose.connect(url);
}

let createUserSchema = () =>{
    const userSchema = new Schema({
        userName: String,
        userPassword: String,
        userBio: String,
    });  
    const User = mongoose.model('User', userSchema);
    return User
}

// Create a new user document
let createUserDocument = (name, pass, bio) =>{
    const newUser = new User({
        username: name,
        userpassword: pass,
        userbio: bio,
    });
    return newUser;
}

let saveUsertoDb = (UserSchemaObject)=>{
    UserSchemaObject.save()
    .catch(err => console.error('Error creating user:', err));
}

module.exports = { connectToDb, createUserSchema, createUserDocument, saveUsertoDb};
  
  






