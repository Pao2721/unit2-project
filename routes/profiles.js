import { Router } from 'express'
import * as profilesCtrl from "../controllers/profiles.js"
const router = Router();

export {
 router 
}

router.get('/:id', loggedIn, profilesCtrl.show)
router.get('/', function (req,res,next) {
 res.send('respond with a resource')
})



function loggedIn(req, res, next) {
 if (req.isAuthenticated()) return next()
 res.redirect('/auth/google')
}