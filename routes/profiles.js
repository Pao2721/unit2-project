import { Router } from 'express'
import * as profilesCtrl from "../controllers/profiles.js"
const router = Router();

export {
 router 
}

router.get('/', function (req,res,next) {
 res.send('respond with a resource pro')
})
router.get('/:id', loggedIn, profilesCtrl.show)
router.get('/:id/edit',loggedIn, profilesCtrl.edit)
router.put('/:id', loggedIn,)



function loggedIn(req, res, next) {
 if (req.isAuthenticated()) return next()
 res.redirect('/auth/google')
}