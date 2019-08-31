const mongoose = require('mongoose')

const Dbconnect = require('./dbconnect')

Dbconnect('mongodb://localhost:27017/test')

let Schema = mongoose.Schema


let categoryList = new Schema({
	event_id:{
		type:Number

	},

	title:{
		type:String

	}




})


var user = mongoose.model('category',categoryList)



module.exports = mongoose.model('category',categoryList)