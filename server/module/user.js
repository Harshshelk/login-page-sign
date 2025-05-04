const mongoose = require('mongoose');

const shema = mongoose.Schema;

const shemauser = new shema({
username : {
    type: String,
    required : true,
},

email : {
    type: String,
    required : true,
},

password : {
    type: String,
    required : true,
},

tasks : { 
    type : shema.Types.ObjectId,
    ref : 'task',

},

});
module.exports = mongoose.model("users" , shemauser);





