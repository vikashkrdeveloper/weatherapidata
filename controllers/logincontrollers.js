const database = require('../modules/registrationschema');
const conformpasswordfunction = require('../helper/comparepassword');
const logincontrollers = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const finddata = await database.findOne({ email });
            if (finddata) {
                const comparepassword = await conformpasswordfunction(password, finddata.password);
                if (comparepassword) {
                    const token = await finddata.genratetokens();
                    res.cookie('jwttokens', token);
                    res.sendStatus(200);
                }
                else {
                    res.sendStatus(400);

                }
            }
            else {
                res.sendStatus(400);
                
            }
        }
        else {
            res.sendStatus(500);
            
        }

    }
    catch (error) {
        console.log('Some technical issue' + error);
    }

}
module.exports = logincontrollers;