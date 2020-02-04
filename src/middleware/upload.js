const multer = require("multer");
const upload = multer({
    dest:"profilePics",
    limits:{
        fileSize: 500
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
        return cb(new Error("Please upload a jpg, jpeg or png only"));
        }
        cb(undefined, true);
    }
});
module.exports = upload;