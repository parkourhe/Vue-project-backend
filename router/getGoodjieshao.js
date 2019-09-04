const mongoose = require('mongoose')

exports.send = (req,res,goodsJieshao)=>{


	res.setHeader('Content-Type','application/json')
	

	if (req.query.id) {
		
		let id = mongoose.Types.ObjectId(req.query.id)



		goodsJieshao.find({'relation_id':id}).then(result=>{
			
			
			 res.send(result)


		})	


	}

	


}