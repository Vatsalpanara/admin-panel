const multer = require("multer");

let DataStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + "-" + Date.now())
    }
})

let upload = multer({storage:DataStorage}).single("image");

module.exports = upload


