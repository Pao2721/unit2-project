import  { Router } from 'express'
import * as collectionCtrl from '../controllers/collections.js'
const router = Router()

export {
 router
}

router.get('/', loggedIn, collectionCtrl.index)

function loggedIn(req, res, next) {
 if (req.isAuthenticated()) return next()
 res.redirect('/auth/google')
}