var mongoose =  require('mongoose')

const Dbconnect = require('./dbconnect')


Dbconnect('mongodb://localhost:27017/test')

let Schema = mongoose.Schema


var commentlist = new Schema({
	
	user_name:{
		type:String,
		default:'parkourhe'
	},

	add_time:{
		type:Date,
		required:true
	},

	content:{
		type:String,
		required:true
	},
	event_id:{

		type:String,

		required:true

	}

})




module.exports=mongoose.model('comment',commentlist)




