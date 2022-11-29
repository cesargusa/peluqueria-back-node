import multer from "multer";

function UploadImage(){
    const storage = multer.diskStorage({
        destination: './src/storage/imgs',
        filename:function(_req,file,cb){
            var extension = file.originalname.slice(file.originalname.lastIndexOf('.'))
                cb(null,Date.now() + extension)
        }

       
    })
     
    const upload = multer({
        storage: storage
    }).single('urlFoto');
    return upload
}
//! Use of Multer


export const methods2 = {
   UploadImage
}