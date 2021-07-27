import { Card } from '../models/card.js'



export{
show,
addToCollection,
}


function show(req, res)  {
 
}

function addToCollection(req, res) {
 req.body.collectedBy = req.user.profile._id
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