import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/blog')
    },
    filename: function(req, file,cb){
        cb(null, file.fieldname+'_'+file.originalname)
    }
});
const upload = multer({storage: storage});

const uploadImg = (req, res, next) => {
    const file = req.file;
    if (!file) {
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400;
        return next(error);
      }
      res.send(file);
      return file.path;
}

export {upload, uploadImg}