let express = require('express');
module.exports=function(db){
  let router = express.Router();

  router.post('/',(req,res)=>{
    // console.log('/login')
    req.session['sess_id']=undefined;
    res.send({error:0})

  });

  return router;
};