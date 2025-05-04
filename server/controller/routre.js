const router = require('express').Router();
const shemauser = require('../module/user');
const bcrypt = require("bcryptjs");

router.post('/register', async(req , res) => {
    try{
        const {username , password , email} = req.body;
   if(!username || !password || !email ){
    return res.status(404).json({error : " all are required "});
        }
   if(username.length<4){
    return res.status(404).json({error : " username must grate then"});
   }

   if(password.length<4){
    return res.status(404).json({error : " password must grate then"});
   }
   const usercheck =  shemauser.findOne({$or :[{username},{email}] });
   
   if(usercheck){
    return res.status(200).json({error : " already exist"});
   }
   else{
    const hashpass = await bcrypt.hash(password ,10);
    const newuser = new  shemauser({username , email , password:hashpass });
    await newuser.save();
    return res.status(200).json({sucess : " registration sucessful "});

   }

    }catch(error){
        return res.status(500).json({message : " eror find "});

    }
});

module.exports = router;











