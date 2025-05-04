const express = require('express');
const app = express();
require("dotenv").config();
require('./conection/conection');
const router = require('./controller/routre');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.get("/apis" , (req ,res) => {
res.send({message :" rasfd  "});
});
app.use('/api/v1',router);


  app.listen(process.env.PORT, () => { 
    console.log(`server started ${process.env.PORT}`);
  });
  

  





  




  

  

  // 
  // nodemon server.js
  
  

  

  
  







