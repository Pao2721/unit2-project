import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth'
import { User } from '../models/user.js'
import { Profile } from '../models/profile.js'



passport.use(
 newGoogleStrategy(
  {
   clientID: process.env.GOOGLE_CLIENT_ID,
   clientSecret: process.env.GOOGLE_SECRET,
   callbackURL: process.env.GOOGLE_CALLBACK
  },
  function (accessToken, refreshToken, profile, done) {
   User.findOne({googleId: profile.id }, function (err, user)  {
    if (err) return done(err)
    if (user) {
     return done(null, user)
    } else {
     const newProfile = new Profile({
      name: profile.displayName,
      avatar: profile.photos[0].value,
     })
     const newUser = new User({
      email: profile.emails[0].value,
      googleId: profile.id,
      profile: newProfile.id 
     })
     newProfile.save(function (err) {
      if (err) return done(err) 
     })
     newUser.save(function (err) {
      if (err) {
       
      }
     })
    }
   })
  }
 )
)