const Dbconnect = require('./dbconnect')

const mongoose =require('mongoose')

Dbconnect('mongodb://localhost:27017/test')


let Schema = mongoose.Schema

var getthunList = new Schema({
	_id:{
		type: Object
	},
	
	relation_id:{
		type : Object

	},
	// mongoose.Types.ObjectId(id)
	src:{

		type:String

	}


},{collection:'thunimages'})

// 可以告诉mongodb你要连接的集合名，不用等它匹配复数

module.exports= mongoose.model('thunimages',getthunList)

