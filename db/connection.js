const mongoose = require('mongoose');
const databaseaddress = process.env.DTABASE_ADDRESS;
mongoose.connect(databaseaddress)
    .then(() => {
        console.log('Database connected ');
    })
    .catch((error) => {
        console.log('Database Not connected ');

    })

module.exports = mongoose;