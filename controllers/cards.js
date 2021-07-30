import axios from 'axios'
import { Card } from '../models/cards.js'



export{
newCard as new,
show,
addToCollection,
search,
removeFromCollection,

}



function newCard(req, res) {
  res.render('cards/new')
}

function show(req, res)  {
 Cards.findById(req.params.id)
 .populate('cards')
 .then((card) => {
   res.render('cards/show', {
     title: 'Pick a card any Card',
     card
   })

 })
}

function addToCollection(req, res) {
 req.body.collected = req.user.profile._id
 Card.findOne({ cardId: req.params.id})
 .then(card => {
  if(card) {
   Card.findById(req.body.collected)
   .then((card)=>{
     console.log(collection)
     collection.cards.push(card._id)
     collection.save()
   .then(() => {
     card.collected.push(collection._id)
     card.save()
     .then(() => {

       res.redirect(`/profiles`)
     })
   })
 })
 } else {
   //if it doesnt exsist in the database create it!
   Card.create(req.body)
   .then((card) => {
   Collection.findById(req.body.collected)
   .then((collection)=>{
     console.log(collection)
     collection.cards.push(card._id)
     collection.save()
   .then(() => {
     card.collected.push(collection._id)
     card.save()
     .then(() => {
       res.redirect(`/profiles`)
     })
   })
   })
   })
 }
})
.catch(err => {
 console.log(err)
 res.redirect('/')
})
}

function search(req, res) {
axios.get()
.then(response => {
  res.render('cards/new', {
    title: 'Saerch Results',
    results: response.data.results
  })
})
.catch(err => {
  console.log(err)
  res.redirect('/')
})
}

function removeFromCollection(req, res) {
  Card.findOne({ rawgId: req.params.id})
  .then(game => {
    card.collectedBy.remove({_id:req.user.profile._id})
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