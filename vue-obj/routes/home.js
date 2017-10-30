let express = require('express');

let createRouter=function(db){
  let router = express.Router();
  router.get('/',(req,res,next)=>{
    let sql=`SELECT * FROM data`;
    db.query(sql,(err,data)=>{
      if(err){
        res.send('接口/的库请求首页表错误');
      }else{
        res.send(data)
      }
    });
  });
    
  return router;
};

module.exports=createRouter;