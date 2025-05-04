const mongoose = require('mongoose');

const shema = mongoose.Schema;

const shematask = new shema({
title : {
    type: String,
    required : true,


},

description : {
    type: String,
    required : true,
},

priority : {
    type: String,
    required : true,
    enum : ['low','medium','high'],
    default : 'low',
},

status : {
    type: String,
    required : true,
    enum : ['yettostart','inprogress','completed'],
    default : 'yettostart',
},

});
module.exports = mongoose.model("task" , shematask);