import { Router } from 'express'
import * as cardsCtrl from '../controllers/cards.js'

export {
 router
}

const router = Router()

router.get('/:id', loggedIn, cardsCtrl.show)
router.post('search', loggedIn, cardsCtrl.search)
router.post('/:id/addToCollection', loggedIn, cardsCtrl.addToCollection)
router.delete('/:id/removeFromCollection', loggedIn, cardsCtrl.removeFromCollection)

function loggedIn(req, res, next) {
 if (req.isAuthenticated()) return next()
 res.redirect('/auth/google')
}