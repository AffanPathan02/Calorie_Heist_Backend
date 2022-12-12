const express = require('express');
const { auth } = require('firebase-admin');


const router = express.Router();

const {createOrUpdateUser} = require("../controllers/auth");

const {authCheck}  = require("../middlewares/auth");



router.post('/create-user',authCheck,createOrUpdateUser);



module.exports = router;
