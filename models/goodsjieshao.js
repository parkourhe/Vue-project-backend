const mongoose = require('mongoose')

const Dbconnect = require('./dbconnect')

Dbconnect('mongodb://localhost:27017/test')

let Schema = mongoose.Schema


let goodsJieshao = new Schema({
	_id:{
		type:Object
	}	


},{'collection':'goodsJieshao'})




module.exports = mongoose.model('goodsJieshao',goodsJieshao)
