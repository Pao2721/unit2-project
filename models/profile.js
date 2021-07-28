import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
 Profile
}

const profileSchema = new Schema({
 name: String,
 googleId: String,
 friends: [{type: Schema.Types.ObjectId, ref: 'Profile' }],
 collectionx: [{type: Schema.Types.ObjectId, ref: 'Collectionx' }],
},{
 timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)