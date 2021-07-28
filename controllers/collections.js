import { Card } from '../models/card.js'
import { Profile } from '../models/profile.js'

export{
create,
addToCollection,
removeFromCollection,
}

function addToCollection(req, res) {
 req.body.collected = req.user.profile_id
 Card.findOne({ rawgId: req.params.id})
 .then(card => {
  if (card) {
   card.collected.push(req.user.profile_id)
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
   card.collected.remove({_id: req.user.profile._id})
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

// function search(req, res) {

// }