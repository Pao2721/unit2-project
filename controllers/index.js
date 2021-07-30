import { Profile } from "../models/profiles.js"
import { Collectionx } from "../models/collections.js"
import { Card } from "../models/cards.js"

export {
 index
}

function index(req, res) {
 Card.find({})
 
}