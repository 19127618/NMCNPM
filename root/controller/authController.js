import accountModel from '../models/accounts.model.js'
import mongooseObject from '../ulti/mongoose.js'

class accountController{
    // async login(req, res, next){
    //     accountModel.findOne({email: req.body.email}).lean()
    //         .then( account => {
    //                 if(account){
    //                     if(account.password === req.body.password){
    //                         res.render('home', account);
    //                         return account;
    //                     }
    //                     else{
    //                         res.redirect('/account/login?fail')
    //                         console.log("false")
    //                     }
    //                 }
    //                 else{
    //                         res.redirect('/account/login?fail')
    //                         console.log("false")
    //                 }
    //             // console.log(account)
    //             }
    //         )
    //         .catch(error => next(error));
    // }

    async logout(req, res, next){
        req.logout();
        res.redirect('/');
    }
}

export default new accountController();