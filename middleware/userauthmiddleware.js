const jwt =require('jsonwebtoken');
const database=require('../modules/registrationschema');
const userauthmiddleware = async (req, res, next) => {
    try {
        const token =req.cookies.jwttokens;
        const verifytoken=await jwt.verify(token,process.env.SECERTY_KEY);
        const rootUser=await database.findOne({_id:verifytoken._id,"tokens.token":token});
        if(!rootUser){
            throw new Error("User not found");

        }
        req.token=token;
        req.rootUser=rootUser;
        req.Userid=rootUser._id;

        next();


    }
    catch (error) {
        res.status(404).send('User not Login')
    }
}
module.exports = userauthmiddleware;