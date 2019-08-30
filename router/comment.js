exports.send = (req,res,commentList)=>{
	

	console.log(typeof(req.query.id));	

	if (!Number(req.query.id)) {
		return res.status(500)
	}
	

	if (req.query.pageIndex) {


		if ((!Number(req.query.pageIndex) && Number(req.query.pageIndex)!=0 )) {
			res.send('数据错误')
			return res.status(500)

		}
		var pageIndex = req.query.pageIndex	

		
		var skipNum = pageIndex *5

	}else{
		
		var skipNum = 0
	}



	let id = req.query.id

	

	res.setHeader('Content-Type', 'application/json');

	commentList.find({"event_id":id})
	.sort({"add_time":-1})
	.skip(skipNum)
	.limit(5)
	.then(result=>{
		res.send(JSON.parse(JSON.stringify(result)))

	})



}