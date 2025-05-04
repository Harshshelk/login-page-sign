/**const user = require('../module/user');
const register = async(req , res) => {
    try{
        const {username , password , email} = req.body;
   if(!username || !password || !email ){
    return res.status(500).json({error : " all are required"});
        }
   if(username.length<4){
    return res.status(500).json({error : " username must grate then"});
   }

   if(password.length<4){
    return res.status(500).json({error : " username must grate then"});
   }
    const usercheck =  user.findOne({$or :[{username},{email}]});
   if(usercheck){
    return res.status(500).json({error : " already exist"});

   }
    const newuser = new user({username , password , email});
   if(newuser){
    return res.status(500).json({sucess : " registration sucessful "});

   }

    }catch(error){
        return res.status(500).json({message : " eror find"});




    }
};

 module.exports = (register);
 




















 

 
 

 
 

