const Dbconnect = require('./dbconnect')

const mongoose =require('mongoose')

Dbconnect('mongodb://localhost:27017/test')


let Schema = mongoose.Schema

var imgComList = new Schema({
	_id:{
		type: Object
	},
	
	relation_id:{
		type : Object

	},
	// mongoose.Types.ObjectId(id)
	add_time:{
		type:Date	

	},

	content:{
		type:String

	},
	title:{
		type:String

	},
	click:{

		type:String

	}



},{collection:'imgComs'})

// 可以告诉mongodb你要连接的集合名，不用等它匹配复数

module.exports = mongoose.model('imgCom',imgComList)


