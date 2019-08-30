

exports.send =  (req,res,newlist)=>{
	
	res.setHeader('Content-Type', 'application/json');

	newlist.find().then(result=>{

		res.send(JSON.parse(JSON.stringify(result)))


	})

	

}