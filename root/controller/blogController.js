import blogsModel from "../models/blogs.model.js";
import mongooseObject from '../ulti/mongoose.js'

class blogController{
    async index(req, res, next){
        blogsModel.find({})
            .then( blog => {
                res.render('home', {
                    blog: mongooseObject.multipleMongooseToObject(blog),
                    user: req.user
                },
                // console.log(blog)
                )}
            )
            .catch(error => next(error));

    }
}

export default new blogController();
