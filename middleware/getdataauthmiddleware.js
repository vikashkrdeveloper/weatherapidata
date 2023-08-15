const jwt =require('jsonwebtoken');
const database =require('../modules/registrationschema');
const getdataauthmiddleware = async (req, res, next) => {
    try {
        
        const token=req.cookies.jwttokens;
        const verifytokens=await jwt.verify(token,process.env.SECERTY_KEY);
        const rootUser=await database.findOne({_id:verifytokens._id,"tokens.token":token});
        if(!rootUser){
            throw new Error('User not found');
        }

        req.token=token;
        req.rootUser=rootUser;
        req.Userid=rootUser._id;
        next();

    }
    catch (error) {
       res.status(400).send('User not login');

    }

}
module.exports = getdataauthmiddleware;