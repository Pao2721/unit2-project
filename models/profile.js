import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
 Profile
}

const profileSchema = new Schema({
 name: String,
 googleId: String,
 friends: [{type: Schema.Types.ObjectId, ref: 'Profile' }],
 collection: [{tyep: Schema.Types.ObjectId, ref: 'Collection' }],

})