const express = require('express');
const { auth } = require('firebase-admin');


const router = express.Router();

const {sendAllDrinks} = require("../controllers/drink");

const {sendAllExercises} = require("../controllers/sendAllExercises");

const {intakeFood} = require("../controllers/intakeFood");

const {getIntakeFood} = require("../controllers/getIntakeFood");

const {authCheck}  = require("../middlewares/drink");

const {intakeAuthCheck}  = require("../middlewares/intakeFood");


const {completeFoodController} = require("../controllers/food");

const {sendAllFood}= require("../controllers/getfood");

const {authCheckFood}  = require("../middlewares/food");

router.get('/drinks',authCheck,sendAllDrinks);

router.get('/exercises',authCheck,sendAllExercises);

router.post('/intakeFood',intakeAuthCheck,intakeFood);

router.post('/food',authCheckFood,completeFoodController);

router.get('/food',authCheckFood,sendAllFood);



router.get('/intakeFood',intakeAuthCheck,getIntakeFood);


module.exports = router;
