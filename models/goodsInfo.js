const mongoose = require('mongoose')

const Dbconnect = require('./dbconnect')

Dbconnect('mongodb://localhost:27017/test')

let Schema = mongoose.Schema


let goodsInfo = new Schema({
	_id:{
		type:Object
	}	


},{'collection':'goodsInfo'})




module.exports = mongoose.model('goodsInfo',goodsInfo)

