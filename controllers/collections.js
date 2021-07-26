import { Card } from '../models/card.js'
import { Profile } from '../models/profile.js'

export{
addToCollection,
removeFromCollection,
}

function addToCollection(req, res) {
 req.body.collectedBy = req.user.profile_id
 Card.findOne({ rawgId: req.params.id})
 .then(card => {
  if (card) {
   card.colectedBy.push(req.user.profile_id)
   card.save()
   .then(() => {
    res.redirect(`/cards/${req.params.id}`)
   })
  } else {
   Card.create(req.body)
   .then(() => {
    res.redirect(`/cards/${req.params.id}`)
   })
  }
 })
 .catch(err => {
  console.log(err)
  res.redirect('/')
 })
}

function removeFromCollection(req, res) {
 // Find the game in the database
 Card.findOne({ rawgId: req.params.id })
 .then(card => {
   // Remove the user's profile id from collectedBy
   card.collectedBy.remove({_id: req.user.profile._id})
   card.save()
   .then(() => {
     res.redirect(`/cards/${req.params.id}`)
   })
 })
 .catch(err => {
   console.log(err)
   res.redirect('/')
 })
}

function search(req, res) {

}