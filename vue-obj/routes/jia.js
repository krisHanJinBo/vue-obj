let express = require('express');

let createRouter=function(db){
  let router = express.Router();
  router.get('/',(req,res,next)=>{
  	console.log(req.query.id)
  	if(!req.session['sess_id']){//看有无seesion
      //路由跳转（模拟路由请求）
      res.send({error:1})
      
    }else{
    	let sql=`SELECT * FROM user${req.session['sess_id']} WHERE ID="${req.query.id}"`
	    db.query(sql,(err,data)=>{
	    	if(data.length==0) {
	    		let a=req.query.id;
	    		let sql1=`alter table user${req.session['sess_id']} add COLUMN count varchar(30);`
	    		db.query(sql1,(err,data)=>{
	    			console.log("count")
	    		})
	    		let sql2=`INSERT INTO user${req.session['sess_id']}(Id,count) VALUES("${a}",1)`
	    		db.query(sql2,(err,data)=>{
	    			res.send({error:0})
	    		})	
			} else {
				let a=data[0].Id;
				console.log(data[0])
				let b=Number(data[0].count)+1;
//				let sql3=`INSERT INTO user${req.session['sess_id']}(Id,count) VALUES(0,1)`
                let sql3=`UPDATE user${req.session['sess_id']} SET count="${b}" WHERE Id="${a}"`
	    		db.query(sql3,(err,data)=>{
	    			res.send({error:0})
	    		})
		    }
	    })
    }
  });
    
  return router;
};

module.exports=createRouter;