const mongoose = require('mongoose');

const BlacklistSchema = mongoose.Schema({
    blockedToken:{type:String,required:true}
})

const BlacklistModel = mongoose.model('BlacklistTokens',BlacklistSchema);

module.exports ={
    
}