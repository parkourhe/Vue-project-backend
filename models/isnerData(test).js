const Dbconnect = require('./dbconnect')

const mongoose =require('mongoose')

const DataModel =require('./images')


Dbconnect('mongodb://localhost:27017/test')



 DataModel.find().then(res=>{

	let arr = res

	let obj = {
		_id:null,
		relation_id:'',
		img_url:'',
		zhaiyao:'',
		title:''

	}

// 查询到的res数组里的数据对象是一个模型对象有很多很多的其他属性，所以需要自定义一个提取数据的obj模板

	arr.forEach(item=>{
		
			for (var key in obj) {
				obj[key] = item[key]
			}

			obj._id = null

			new DataModel(obj).save((err,data)=>{
				console.log(err);
			})			
		

	})

	

})
