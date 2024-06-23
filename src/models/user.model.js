import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {type: 'string',
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 100,
        lowercase: true,
        uppercase: true,
        match: /^[a-zA-Z0-9]+$/
    },
    email: {
         type: 'string',
         unique: true,
         trim: true
    },
    password:{
        type:'string',
        required: true
    }
}, {
    timestamps: true,
});
export default mongoose.model('User', userSchema)