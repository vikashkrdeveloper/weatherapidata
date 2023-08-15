const database = require('../modules/registrationschema');
const hashingpasswordfunction = require('../helper/hash');
const registercontrollers = async (req, res) => {
    try {
        const { name, email, username, phone, password, conformpassword } = req.body;
        const findemail = await database.findOne({ email });
        const findusername = await database.findOne({ username });
        const findphone = await database.findOne({ phone });
        if (name && email && username && phone && password && conformpassword) {
            if (findemail) {
                res.sendStatus(400);
            }
            else {
                if (findusername) {
                    res.sendStatus(401);

                }
                else {
                    if (findphone) {
                        res.sendStatus(402);

                    }
                    else {
                        if (password === conformpassword) {
                            const hashingpassword = await hashingpasswordfunction(password);
                            const insertdata = new database({ name, email, username, phone, password: hashingpassword });
                            await insertdata.save();
                            res.sendStatus(200);
                         
                        }
                        else {
                            res.sendStatus(403);

                        }
                    }
                }
            }


        }
        else {
            res.sendStatus(500);
        }
    }
    catch (error) {
        res.sendStatus(404);

        console.log("Some technical issue " + error)
    }

}
module.exports = registercontrollers;