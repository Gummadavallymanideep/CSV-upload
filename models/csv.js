const mongoose = require('mongoose');

const multer = require('multer');  //using multer for file upload
const path = require('path');
const CSV_PATH = path.join('uploads');
//const csv = require('csv-parser');

const csvSchema = new mongoose.Schema({
    filename:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

// //setting up multer storage
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.join(__dirname,'../' , CSV_PATH));
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//       cb(null, file.originalname + '-' + uniqueSuffix)
//     }
//   });

// //setting up file-filter to upload only (.csv) files
// function fileFilter (req, file, cb) {

//     if(file.mimetype == 'text/csv'){
//         cb(null,true);
//     }
//     else{
//         console.log("File is not csv type");
//         cb(null,false);
//     }
//   }

// csvSchema.statics.uploadCSV = multer({storage:storage}).single('uploaded_file');  //initializing multer
// csvSchema.statics.csvPath = CSV_PATH;


const CSV = mongoose.model("CSV", csvSchema);

module.exports = CSV;