let express = require('express');

let createRouter=function(db){
  let router = express.Router();
  router.post('/',(req,res,next)=>{
  	let sql = `SELECT * FROM user WHERE username="${req.body.username}"`
		db.query(sql, (err, data) => {
			if(err) {
				res.send("登录时数据库错误")
			} else {
				if(data.length > 0) {
					if(data[0].password == req.body.password) {						
						req.session['sess_id'] = data[0].Id
						res.send({error:0})
						
						let sql=`create table user${req.session['sess_id']}(
										     Id int primary key auto_increment
										    )`;
								  db.query(sql,(err,data)=>{
								    if(err){
								    }else{
								      console.log("...")
								    }
								  });	
						
					} else {
						res.send({error:1})
					}
				} else {
					res.send({error:1})
			    }
		    }
	})
  	
  	
  	
  	
  	
//  let sql=`create table JJJ(
//		     Id int primary key auto_increment
//		    )`;
//  db.query(sql,(err,data)=>{
//    if(err){
//      res.send('接口/的库请求首页表错误');
//    }else{
//      console.log("...")
//    }
//  });
  });
    
  return router;
};

module.exports=createRouter;