const express=require('express');
const router=express.Router();
const homecontrollers=require('../controllers/homecontrollers');
const registercontrollers=require('../controllers/registercontrollers');
const logincontrollers=require('../controllers/logincontrollers');
const userauthcontrollers=require('../controllers/userauthcontrollers');
const userauthmiddleware=require('../middleware/userauthmiddleware');
const logincontrollersget=require('../controllers/logincontrollersget');
const signupcontrollersget=require('../controllers/signupcontrollersget');
const forgetpasswordcontrollersget=require('../controllers/forgetpasswordcontrollersget');
const getdataauthmiddleware=require('../middleware/getdataauthmiddleware');
const getdataauthcontrollers=require('../controllers/getdataauthcontrollers');
const logoutcontrollers=require('../controllers/logoutcontrollers');
router.get('/',homecontrollers);
router.get('/signup',signupcontrollersget);
router.get('/login',logincontrollersget);
router.get('/logout',logoutcontrollers);
router.get('/password/reset',forgetpasswordcontrollersget);
router.post('/register',registercontrollers);
router.post('/login',logincontrollers);
router.get('/getdata',getdataauthmiddleware,getdataauthcontrollers);
router.get('/profile',userauthmiddleware,userauthcontrollers);


module.exports=router;