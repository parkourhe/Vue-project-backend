const mongoose =require('mongoose')

const async  = require('async')

exports.send = (req,res,goods)=>{

		
		res.setHeader('Content-Type','application/json')


		var dataArr = []

		
		if (req.query.id) {

			let idArr = req.query.id.split(',');	

			Promise.all(idArr.map(item=>{

				let id = mongoose.Types.ObjectId(item)

				return new Promise((resolve,reject)=>{
					
					goods.find({'_id':id}).then(result=>{
				
						resolve(result[0])

					})

				})


			})).then(result=>{

				res.send(result)

			})
			
			
		}
		

	}

// async.each(idArr,function(item,callback){
	
// 				let id = mongoose.Types.ObjectId(item)

// 				goods.find({'_id':id}).then(result=>{

// 					let arr = dataArr.concat(result)

// 					dataArr = arr

// 					callback(null)

// 				})

// 			},function(){
// 				console.log(dataArr);
// 			})


// 特别注意，要想实现在map，或者foreach中让异步函数 同步执行， 可以用Promise.all保证异步结果，但这个只能配合map使用， 而foreach则要配合node模块 async 使用