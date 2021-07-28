import { Router } from 'express'
import * as indexCtrl from '../controllers/index.js'
const router = Router()

export {
 router
}

router.get('/', function (req,res,next) {
 res.send('respond with a resource ind')
})

router.get('/', loggedIn, indexCtrl.index)

function loggedIn(req, res, next) {
 if (req.isAuthenticated()) return next();
 res.redirect("/auth/google");
}

