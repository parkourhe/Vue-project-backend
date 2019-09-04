const express = require('express')

const index = require('./index')

const Imglist = require('./Imglist')

const router = express.Router()

const mongoose = require('mongoose')

const comment = require('./comment')

const PostComment = require('./commentsPost')

const Category =  require('./category')

const getImgCom = require('./getImgCom')

const image =require('./image')

const url = require('url')

const getthun = require('./getthunimages')

const getGoods = require('./getGoods')

const getGoodsInfo = require('./getGoodsInfo')

const getGoodjieshao = require('./getGoodjieshao')

var goodjieshao = require('../models/goodsjieshao')

var goodsInfo = require('../models/goodsInfo')

var goods = require('../models/goods')

var thunimages = require('../models/thunimages')

var imgComlist  = require('../models/getImgCom')

var CategoryModel = require('../models/categoryList')

var commentList = require('../models/commentList')

var newlist = require('../models/newlist')

var images = require('../models/images')

router.get('/',(req,res)=>{

	index.render(req,res)

})


router.get('/Imglist',(req,res)=>{


	Imglist.send(req,res,newlist)


})

router.get('/comment',(req,res)=>{

	
	comment.send(req,res,commentList);

});

router.post('/comment',(req,res)=>{

	PostComment.send(req,res,commentList,url);

});

router.get('/getCategory',(req,res)=>{

	Category.send(req,res,CategoryModel);

});

router.get('/getImage',(req,res)=>{

	image.send(req,res,images)

});

router.get('/getImgCom',(req,res)=>{

	getImgCom.send(req,res,imgComlist);

});

router.get('/getthunimages',(req,res)=>{
	getthun.send(req,res,thunimages)
});

router.get('/getGoods',(req,res)=>{

	getGoods.send(req,res,goods)


})


router.get('/getGoodsInfo',(req,res)=>{

	getGoodsInfo.send(req,res,goodsInfo)

})

router.get('/getJieshao',(req,res)=>{

	getGoodjieshao.send(req,res,goodjieshao)

})



module.exports =router


