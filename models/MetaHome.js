const mongoose = require('mongoose')

const MetaHomeSchema = new mongoose.Schema(
    {
    title:{
        type: String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    
},
{ timeStamps: true }

)

module.exports = mongoose.model('metaHome', MetaHomeSchema )