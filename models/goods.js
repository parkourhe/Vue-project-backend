const Dbconnect = require('./dbconnect')

const mongoose =require('mongoose')

Dbconnect('mongodb://localhost:27017/test')

let Schema = mongoose.Schema

var goodsList = new Schema({
	_id:{
		type: Object
	},
	
	img_url:{
		type:String	

	},

	zhaiyao:{
		type:String

	},
	title:{
		type:String

	},

	add_time:{
		type:String
	}



},{'collection':'goods'})


module.exports=mongoose.model('goods',goodsList)

