import { Router } from 'express'
import passport from 'passport'
const router = Router()

export {
  router
}

router.get('/', function (req,res,next) {
  res.send('respond with a resource authentic')
 })

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get(
  '/google/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/auth/google',
  })
)

router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})

