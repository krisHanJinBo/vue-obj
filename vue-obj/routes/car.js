let express = require('express');

let createRouter=function(db){
  let router = express.Router();
  router.post('/',(req,res)=>{
  	var  arr=[];
    let sql=`SELECT * FROM user${req.session['sess_id']}`
	    db.query(sql,(err,data)=>{
	    	if(err) {
				res.send({error:1})
			} else {
				if(data.length==0){
					res.send({error:1})
				}
				console.log(data)
				for(var i=0;i<data.length;i++){					
					db.query((`SELECT * FROM data WHERE id="${data[i].Id}"`),(error,result)=>{						
						arr.push(result[0])
						if(arr.length==data.length){
							res.send({a:arr,b:data})
						}
					})
				}
				
		    }
	})
  });
    
  return router;
};

module.exports=createRouter;