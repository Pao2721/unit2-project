import { Router } from 'express'
import * as cardsCtrl from '../controllers/cards.js'
const router = Router()

export {
 router
}

router.get('/', function (req,res,next) {
 res.render('cards',  {
  Title: 'NIPOK',
  })
})

router.get('/new', cardsCtrl.new)
router.get('/:id', cardsCtrl.show)
router.post('search', cardsCtrl.search)
router.post('/:id/addToCollection', loggedIn, cardsCtrl.addToCollection)
router.delete('/:id/removeFromCollection', loggedIn, cardsCtrl.removeFromCollection)

function loggedIn(req, res, next) {
 if (req.isAuthenticated()) return next()
 res.redirect('/auth/google')
}