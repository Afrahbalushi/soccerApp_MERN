import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PlayerSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number
    },
    iscoatch:{
        type: Boolean,
        default: false
    },
    team:{
        type: String
    },
    speed:{
        type: Number,
        enum: [1, 2, 3]
    },
    strength:{
        type: Number,
        enum: [1, 2, 3]
    },
    endurance:{
        type: Number,
        enum: [1, 2, 3]
    },
    ability:{
        type: Number,
        enum: [1, 2, 3]
    },
    techiques:{
        type: Number,
        enum: [1, 2, 3]
    },
    tectical:{
        type: Number,
        enum: [1, 2, 3]
    },
    createdDate:{
        type: Date,
        default: Date.now
    }

});