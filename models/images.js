const Dbconnect = require('./dbconnect')

const mongoose =require('mongoose')

Dbconnect('mongodb://localhost:27017/test')

let Schema = mongoose.Schema

var imageList = new Schema({
	_id:{
		type: Object
	},
	
	relation_id:{
		type : Object

	},
	// mongoose.Types.ObjectId(id)
	img_url:{
		type:String	

	},

	zhaiyao:{
		type:String

	},
	title:{
		type:String

	}



})


module.exports=mongoose.model('image',imageList)