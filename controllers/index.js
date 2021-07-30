import { Profile } from "../models/profiles.js"
import { Collectionx } from "../models/collections.js"
import { Card } from "../models/cards.js"

export {
 index
}

function index(req, res) {
 Cards.find({})
 .sort({_id: -1})
 .populate('Profile')
 .then(cards => {
  res.render('index', {
   cards: cards,
   title: Yo
  })
 })
}