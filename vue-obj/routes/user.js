let express = require('express');

let createRouter=function(db){
  let router = express.Router();
  router.post('/',(req,res,next)=>{
    let sql=`SELECT * FROM user WHERE ID="${req.session['sess_id']}"`
	    db.query(sql,(err,data)=>{
	    	if(err) {
				res.send({error:1})
			} else {
				if(data.length>0){
				    res.send(data)
				}else{
					res.send({error:1})
				}
			   			
		    }
	})
  });
    
  return router;
};

module.exports=createRouter;