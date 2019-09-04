const mongoose =require('mongoose')


exports.send = (req,res,thunimages)=>{

		res.setHeader('Content-Type','application/json')

		if (req.query.id) {
			
			let id = mongoose.Types.ObjectId(req.query.id)

			thunimages.find({'relation_id':id}).then(result=>{

				res.send(result)

			})



		}


		
		

}