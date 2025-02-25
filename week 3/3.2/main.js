const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://atharvadhumal256:atharva2410@cluster0.6jxte.mongodb.net/")

const User = mongoose.model('Users', { name: String, email: String, passwrord: String });

const user = new User({ name: 'Atharva Dhumal', email: "atharvadhumal@gmail.com", passwrord: "atharva24" });
user.save();
// user.save().then(() => console.log('meow')); 