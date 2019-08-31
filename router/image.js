let mongoose = require('mongoose')

exports.send=(req,res,images)=>{

	res.setHeader('Content-Type','application/json')

	if (Number(req.query.id)!==0) {
		
		let id = mongoose.Types.ObjectId(req.query.id)

	// mongoose查询_id必须转成object类型

	images.find({"relation_id":id}).then(result=>{

		res.send(result);
	})

	

}


images.find().then(result=>{

	res.send(result)

})











}
