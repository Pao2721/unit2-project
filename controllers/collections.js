import { Card } from '../models/cards.js'
import { Profile } from '../models/profile.js'

export{
index,
create,
addToCollection,
removeFromCollection,
}

function index(req, res) {

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

function create(req, res) {

}

// function search(req, res) {

// }