const mongoose = require('mongoose')

const connectdb = async () => {
    mongoose.connect(process.env.MONGODB_URL,)
    .then(() =>{
        console.log('DB connected as expence-tracker')
    })
    .catch((err) =>{
        console.log(err)
    })
}

module.exports = connectdb