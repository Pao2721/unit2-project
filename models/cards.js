import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
 Card
}

const cardSchema = new Schema ({
 name: String,
 benefit: String,
 detriment: String,
 //likes: Number,
// comments: String,
 //collected: [{type: Schema.Types.objectId, ref: 'Collection'}]
}, {
 timestamps: true
})

const Card = mongoose.model('Card', cardSchema)
