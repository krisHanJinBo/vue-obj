let express = require('express');

let createRouter=function(db){
  let router = express.Router();
  router.post('/',(req,res,next)=>{
  	console.log("...")
    let sql=`SELECT * FROM user WHERE username="${req.body.username}"`
	    db.query(sql,(err,data)=>{
	    	if(!err){
	    		if(data.length>0){
	    			res.send({error:1})
	    		}else{
	    			let sql2=`INSERT INTO user(Id,username,password,jf,ye) VALUES(0,"${req.body.username}","${req.body.password}",0,0)`
	    			db.query(sql2,(err,data)=>{
	    				if(!err){
	    					  res.send({error:0})		    					  
	    				}
	    			})
	    		}
	    	}
	})
  });
    
  return router;
};

module.exports=createRouter;