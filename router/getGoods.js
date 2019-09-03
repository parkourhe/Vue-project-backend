exports.send = (req,res,goods)=>{

	res.setHeader('Content-Type','application/json')
	if (Number(req.query.pageIndex)) {
		
		let skipNum = Number(req.query.pageIndex) * 10

		
		goods.find()
		.limit(10)
		.skip(skipNum)
		.then(result=>{
			res.send(result)
		})

		return 
		 
	}

	

	goods.find()
		.limit(10)
		.then(result=>{
			res.send(result)
		})


}