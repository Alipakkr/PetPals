const mongoose = require('mongoose');

const BlacklistSchema = mongoose.Schema({
    blockedtoken:{type:String,required:true}
})

const BlacklistModel = mongoose.model('BlacklistToken',BlacklistSchema);

module.exports ={
    BlacklistModel
}