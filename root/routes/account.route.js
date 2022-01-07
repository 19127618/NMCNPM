import express from "express";
import account from "../controller/authController.js";
import passport from "../passport/index.js";

const router = express.Router();

router.get('/login', function (req, res){
    const wrongPassword = req.query['wrong-password'] !== undefined;
    const blocked = req.query['blocked'] !== undefined;

    if(wrongPassword)
        return res.render('vwAccount/login', { 
            layout: false,
            wrongPassword,
        });

    if(blocked)
        return res.render('vwAccount/login', { 
            layout: false,
            blocked,
        });

    else
        return res.render('vwAccount/login', {
            layout: false
        }
    );
});

router.get('/profile', function (req, res) {
    res.render('vwAccount/profile');
});

// router.post('/login/signIn', account.login);

// router.post('/login/signIn', passport.authenticate("local-login", {
//     successRedirect : '/',
//     failureRedirect : '/account/login',
//     // failureFlash : true
//     })
// );

router.post('/login/signIn', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
        if (err == "blocked"){
            return res.redirect('/account/login?blocked');
        }
        if (!user) { return res.redirect('/account/login?wrong-password'); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.redirect('/');
        });
    })(req, res, next);
}
);

router.get('/logout', account.logout);


export default router;