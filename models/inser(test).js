const Dbconnect = require('./dbconnect')

const mongoose =require('mongoose')

const DataModel =require('./images')


Dbconnect('mongodb://localhost:27017/test')



// 查询数据,如果没有title这个属性，则返回这条数据的ID，好作以修改


DataModel.find().then(res=>{

	let arr = []

	res.forEach(item=>{

		if (item.title==undefined) {
			
			arr.push(item._id)

		}


	})
	

	// 这里arr就是没有title的数据id


	// 新版本使用updateMany来批量修改 这个是官方api
	
	return DataModel.updateMany({'_id':{$in:arr}},{"title":'这是标题标题标题哦'},{upsert:true})

}).then(res=>{

	console.log({res});


})
