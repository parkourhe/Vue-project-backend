const Dbconnect = require('./dbconnect')

const mongoose =require('mongoose')

Dbconnect('mongodb://localhost:27017/test')

let Schema = mongoose.Schema

var imageList = new Schema({

	relation_id:{
		type : Object

	},
	img_url:{
		type:String	

	},

	zhaiyao:{
		type:String

	}



})


module.exports=mongoose.model('image',imageList)