const bcrypt = require('bcrypt');
const comparpasswordfunction = async (password, hashingpassword) => {
    try {
        const comparpassword = await bcrypt.compare(password, hashingpassword);
        return comparpassword;
    }
    catch (error) {
        console.log("Some technical issue" + error);
    }

}
module.exports = comparpasswordfunction;