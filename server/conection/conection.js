const mongoose = require("mongoose");

const conn =  async () => {
    try{
        mongoose.connect(`${process.env.MONGODB_URI}`);

        console.log("mongoos conected sucsesfully");
    }catch(error){
        console.log("not conected" );

    }
};  
 conn();
 

 











