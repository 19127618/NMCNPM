// const passport = require('passport')
//     , LocalStrategy = require('passport-local').Strategy;

import passport from 'passport';
import { Strategy as LocalStrategy} from 'passport-local'

import User from '../models/accounts.model.js';


passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},
function (req, email, password, done) { // callback với email và password từ html form
    // find a user whose email is the same as the forms email
    // we are checking to see if the user trying to login already exists
    // tìm một user với email
    // chúng ta sẽ kiểm tra xem user có thể đăng nhập không
    User.findOne({email: email}, function (err, user) {
        console.log(user)
        
        if (!user) {
            return done(null, false, {message: 'Incorrect username.'});
        }
        if(user.block){
            
            return done('blocked', false, {message: 'blocked'});
        }
        if (user.password !== password){
            return done(null, false, {message: 'Incorrect password.'});
        }
        

        return done(null, user);
    });
})
);

passport.serializeUser(function(user, done) {
    // console.log(user);
    done(null, {
        email: user.email,
        role: user.role,
        block: user.block,
        fullname: user.fullname,
    });
});

passport.deserializeUser(async function(user, done) {
    done(null, user);
});


export default passport;