const mongoose = require('mongoose')

const MetaAboutSchema = new mongoose.Schema(
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

module.exports = mongoose.model('metaAbout', MetaAboutSchema )