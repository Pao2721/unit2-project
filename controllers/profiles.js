import { Profile } from "../models/profiles.js"
import { Card } from "../models/cards.js"
import { Collection } from "../models/collections.js"

export{
 index,
 update,
 edit,
 show,
 removefriend,
 addFriend
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
  Profile.findByIdandUpdate(req.params.id, req.body, {new: true})
  .then(profile => {
    res.redirect(`/profiles/${profile._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function edit(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    res.render('profiles/edit', {
      title: `Editing ${profile.name}'s profile`,
      profile: profile
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate('friends')
  .then(profile => {
    Game.find({ collectedBy: profile._id })
    .then(games => {
      Profile.findById(req.user.profile)
      .then(userProfile => {
        res.render('profiles/show', {
          profile,
          userProfile,
          title: `${profile.name}'s profile`,
          games
        })
      })
    })

  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      title: "Card Collector Profiles",
      profiles,
    })
  })
}