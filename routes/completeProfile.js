const express = require('express');
const { auth } = require('firebase-admin');


const router = express.Router();

const {completeProfileController} = require("../controllers/completeProfile");

const {completeProfile}  = require("../middlewares/completeProfile");



router.post('/complete-profile',completeProfile,completeProfileController);



module.exports = router;
