import { Router } from 'express'
import * as cardsCtrl from '../controllers/cards.js'


export {
 router

}



router.get('/', cardsCtrl.create)
router.get('/:id', cardsCtrl.show)
router.post('search', cardsCtrl.search)
router.post('/:id/addToCollection', loggedIn, cardsCtrl.addToCollection)
router.delete('/:id/removeFromCollection', loggedIn, cardsCtrl.removeFromCollection)

function loggedIn(req, res, next) {
 if (req.isAuthenticated()) return next()
 res.redirect('/auth/google')
}