import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://admin:fvmQ1D2B6iDKmUM6@cluster0.ztkcnap.mongodb.net/DevsUnited");
const userSchema = new mongoose.Schema({

    username: {
     type: String,
     required: true,
     unique: true,
     lowerCase: true,
     trim: true,
     minLength: 3,
     maxLength: 30,
    },

    password:{
     type:String,
     required:true,
     minLength:6,
    },

    firstName:{ 
        type:String,
        required: true,
        trim:true,
        maxLenght: 20
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        maxLength:20
    }

});
const User = mongoose.model('User', userSchema);
export { User };