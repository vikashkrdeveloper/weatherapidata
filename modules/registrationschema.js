const database = require('../db/connection');
const jwt = require('jsonwebtoken');

const registerschema = new database.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true
    },
    username: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true
    },
    phone: {
        type: Number,
        trim: true,
        unique: true
    },
    address: {
        type: String,
        lowercase: true,
        trim: true
    },
    district: {
        type: String,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    tokens: [
        {
            token: {
                type: String,
                trim: true
            }
        }
    ]
}, { timestamps: true });

registerschema.methods.genratetokens = async function () {
    const token = await jwt.sign({ _id: this._id.toString() }, process.env.SECERTY_KEY);
    this.tokens = this.tokens.concat({ "token": token });
    this.save();
    return token;

}


const registermodels = database.model('registration', registerschema);

module.exports = registermodels;