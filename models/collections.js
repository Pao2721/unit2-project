import mongoose from 'mongoose'
const Schema = mongoose.Schema

export{
 Collection
}

const collectionSchema = new Schema({
 name: String,
 collector: [{type: Schema.Types.ObjectId, ref:'Profile'}],
 cards: [{type: Schema.Types.ObjectId, ref: 'Card'}],
 comments: String
}) 

  const Collection = mongoose.model('Collectionx',collectionSchema)