const mongoose = require("mongoose")
mongoose.connect(process.env.DB_URL)
const Data = require('./data_model')

class API{
    async get_data(){
        return await Data.find();
    }
}

module.exports = API;