const express = require('express');
const router = express.Router();

const fileController = require('../controllers/file_controller');
const CSV = require('../models/csv');

router.post('/upload', fileController.upload, fileController.createFile);   //route for uploading new file
router.get('/open',fileController.open);        //route for opening already uploaded file
router.get('/delete',fileController.delete);    //route for deleting a particular file

module.exports = router;