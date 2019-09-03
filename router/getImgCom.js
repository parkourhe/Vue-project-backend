const mongoose = require('mongoose')

exports.send = (req,res,imgComlist)=>{


	console.log(res);

	if (req.query.id) {
		
		let id = mongoose.Types.ObjectId(req.query.id)


		imgComlist.findOne({'relation_id':id},function(err,data){
			if (err) {
				return console.log(err);
			}
			
			res.send(data)
		})


	}
	

}