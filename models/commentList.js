var mongoose =  require('mongoose')

mongoose.connect('mongodb://localhost:27017/test',{ useNewUrlParser: true })


mongoose.connection.on("connected",function(){
    console.log("MongoDB connected success.")
})

// 连接失败操作
mongoose.connection.on("error",function(){
    console.log("MongoDB connected fail.")
})

// 连接断开操作
mongoose.connection.on("disconnected",function(){
    console.log("MongoDB connected disconnected.")
})

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




