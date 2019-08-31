
exports.send=(req,res,CategoryModel)=>{

	res.setHeader('Content-Type','application/json')

	CategoryModel.find().then(reslut=>{

		res.send(reslut)

	})



}