const passport =require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const credentials = require('../config/keys');
const mongoose = require('mongoose');
const User  = mongoose.model('users');

passport.serializeUser( (user, done) => {
  done(null, user.id)
})

passport.deserializeUser( (id, done) => {
  User.findById(id).then((user )=> {done(null, user)})
})

// invoke the passport authentification
passport.use(

    // Hi I'm Googlestrategy if someone search for 'google', just call me XD 
    new GoogleStrategy(
      {
        clientID: credentials.googleClientID,
        clientSecret: credentials.googleClientSecret,
        callbackURL: '/auth/google/callback',// Authorized redirect url in Project API
        proxy: true 
      },
        (accessToken, refreshToken, profile, done) => 
        User.findOne({ googleId: profile.id })
            .then( user => {
              if(user) { done(null, user)}
              else{
                (new User({ googleId: profile.id})).save()
                  .then( newUser => done(null, newUser))
              }
            })                                    
         
    )
)

