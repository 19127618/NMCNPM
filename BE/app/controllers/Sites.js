
class NewSites{
    
    //[GET] /write blog
    writeBlog(req, res){
        res.render('write-blog');
    }
}

module.exports = new NewSites;