import mongoose from 'mongoose'
const Schema = mongoose.Schema

export{
 Collectionx
}

const collectionSchema = new Schema({
 name: String,
 collector: [{type: Schema.Types.ObjectId, ref:'Profile'}],
 cards: [{type: Schema.Types.ObjectId, ref: 'Card'}],
 comments: String
}) 

  const Collectionx = mongoose.model('Collectionx',collectionSchema)