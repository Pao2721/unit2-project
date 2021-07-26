import { Profile } from "../models/profiles.js"
import { Card } from "../models/cards.js"
import { Collections } from "../models/collections.js"

export{

}

function addFriend(req, res) {
 Profile.findById(req.user.profile)
  .then(user => {
   profile.friends.push(req.params.id)
   profile.save()
   .then(() => {
    res.redirect(`/users/${req.params.id}`)
   })
  })
  .catch(err => {
   console.log(err)
   res.redirect('/')
  })
}

function removefriend(req, res) {
 User.findById(req.user.profile)
 .then(profile => {
   profile.frinds.remove({_id:req.params.id})
   profile.save()
   .then(()=> {
     res.redirect(`profiles/${req.params.id}`)
   })
 })
 .catch(err => {
   console.log(err)
   res.redirect('/')
 })
}

function update(req, res) {
  Profile.findByIdandUpdate(req.params.id)
}