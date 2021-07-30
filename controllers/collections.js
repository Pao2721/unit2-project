import { Collectionx } from '../models/collections.js'
import { Card } from '../models/cards.js'
import { Profile } from '../models/profiles.js'

export{
index,
create,
addToCollection,
removeFromCollection,
}

function show(req, res) {
  Collections.findById(req.params.id)
  .populate('cards')
  .then((collection) => {
    res.render('/collections', {
      title: 'Card Collection',
      collection 
    })
  })
 }


function index(req, res) {
  Collection.find({})
  .populate({
    path: 'collected',
    populate: {
      path: 'collector'
    }
  }) 
  .populate('cards')
  .then((collections) => {
    res.render('collections/index', {
      title: 'Your Cards',
      collection
    })
  })
  .catch((err) => {
    res.render(err)
  })
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
 req.body.profile = req.user.profile._id
 Collection.create(req.body)
 .then((deck) => {
   Profile.findById
   res.redirect('/collections')
 })
}

// function search(req, res) {

// }