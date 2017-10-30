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
  
//router.get('/',(req,res)=>{
//  // console.log('/user');
//  if(!req.session['user_id']){//看有无seesion
//    //路由跳转（模拟路由请求）
//    res.render('index.ejs',{
//            u:"登录",
//            sy:res.sy
//          });
//  }else{
//    //兜库 id对应的用户数据取出来
//    let sql=`SELECT * FROM user WHERE ID="${req.session['user_id']}"`;
//    db.query(sql,(err,data)=>{
//    	console.log(data[0])
//      if(err){
//        res.send('获取用户信息时，库错误')
//      }else{
//        if(data.length>0){
//          res.render('index.ejs',{
//            u:data[0],
//            sy:res.sy
//          });
//        }
//      }
//    });
//  }
//});
  
  return router;
};

module.exports=createRouter;