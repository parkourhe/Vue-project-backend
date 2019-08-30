exports.send = (req,res,commentList,url)=>{



	res.send('haahaha')

	const newComments = new commentList ({

		"content" : req.body.content,

		"event_id": Number(req.query.id),

		"add_time": Date.now()


	})

	newComments.save(function(err,data){
		if (err) {
			return console.log(err);
		}
		console.log(data);
	})



}



