let express = require('express')

let path = require('path')

let router = require('./router/router.js')

let bodyParser = require('body-parser')

let app = express();


app.engine('html',require('express-art-template'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next()
})


app.use(router)

app.set(path.join(__dirname,'/views'))
	
app.listen('4000',(err)=>{

	if (err) {
		console.log('启动失败')
		throw err
	}

	console.log('启动成功');



})






