const mongoose =require('mongoose')

module.exports = function(url){
	mongoose.connect(url,{ useNewUrlParser: true })


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


}