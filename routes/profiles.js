import { Router } from 'express'
import * as profilesCtrl from "../controllers/profiles.js"
const router = Router();

export {
 router 
}

router.get('/profiles', function (req,res,next) {
 res.render('respond with a resource pro')
})

router.get('/:id', loggedIn, profilesCtrl.show)
router.get('/:id/edit', loggedIn, profilesCtrl.edit)
router.put('/:id', loggedIn, profilesCtrl.update)
//Adding and Subtracting Friends
router.get('/:id/friend', loggedIn, profilesCtrl.addFriend)
router.get('/:id/unfriend', loggedIn, profilesCtrl.removeFriend)


function loggedIn(req, res, next) {
 if (req.isAuthenticated()) return next()
 res.redirect('/auth/google')
}