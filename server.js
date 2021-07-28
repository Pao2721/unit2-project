import 'dotenv/config'
import passport from 'passport'
import createError from 'http-errors'
import express from 'express'
import session from 'express-session'
import methodOverride from 'method-override'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import{ passUserToView } from './middleware/middleware.js'

const app = express()

//Connects to MongoDB
import('./config/database.js')
//Loads Passport
import('./config/passport.js')

//Require routes
import { router as indexRouter } from './routes/index.js'
import { router as authRouter} from './routes/auth.js'
import { router as profilesRouter } from './routes/profiles.js'
import { router as cardsRouter } from './routes/cards.js'
import { router as collectionsRouter} from './routes/collections.js'


// view engine setup
app.set(
  'views',
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)
app.set('view engine', 'ejs')

app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)

// Session Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: 'lax',
    }
  })
)

app.use(passport.initialize())
app.use(passport.session())


app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/profiles', profilesRouter)
app.use('/collections',collectionsRouter)
app.use('/cards', cardsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export { app }
