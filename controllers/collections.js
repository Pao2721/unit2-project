import { Card } from '../models/cards.js'
import { Profile } from '../models/profiles.js'

export{
index,
create,
addToCollection,
removeFromCollection,
}

function show(req, res) {
  axios
  .get(`https://api.rawg.io/api/games/${req.params.id}?key=${process.env.API_KEY}`)
  .then((response) => {
    Card.findOne({ rawgId: response.data.id })
    // This is where we'll populate collectedBy
    // This is where we'll deep-populate reviews
    .then((card)=> {
      res.render("cards/show", {
        title: "Card Details",
        apiResult: response.data,
        card
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
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