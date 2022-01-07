import blogsModel from "../models/blogs.model.js";
import mongooseObject from '../ulti/mongoose.js'
import accountsModel from "../models/accounts.model.js";

    const index = async (req, res, next)=>{
        blogsModel.find({approve: 0})
            .then( async blog => {

                res.render('vwAdmin/blog', {
                    blog: mongooseObject.multipleMongooseToObject(blog),
                    user: req.user
                },
                // console.log(blog)
                )}
            )
            .catch(error => next(error));
    }

    const approve = async (req, res, next)=>{
        // console.log(req.query['approve'])
        let approve = 0;
        approve = req.query['approve'];
        const id = req.query['id'];

        // console.log(approve, id)

        await blogsModel.updateOne({blog_id: id}, {approve: approve})
            .then( blog =>{
                res.redirect('/admin/blog')
            })
            .catch(error => next(error));
    }

export {index, approve};
