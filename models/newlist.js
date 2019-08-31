var mongoose =  require('mongoose')

const Dbconnect = require('./dbconnect')

Dbconnect('mongodb://localhost:27017/test')

let Schema = mongoose.Schema


var newList = new Schema({

	img:{
		type:String,
		required :true
	},

	url:{
		type:String,
		required :true
	}




})

module.exports=mongoose.model('admig',newList)