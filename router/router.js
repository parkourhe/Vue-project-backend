const express = require('express')

const index = require('./index')

const Imglist = require('./Imglist')

const router = express.Router()

const mongoose = require('mongoose')

const comment = require('./comment')

const PostComment = require('./commentsPost')

const Category =  require('./category')

const image =require('./image')

const url = require('url')



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

	
	comment.send(req,res,commentList)

})

router.post('/comment',(req,res)=>{

	PostComment.send(req,res,commentList,url)

})

router.get('/getCategory',(req,res)=>{

	Category.send(req,res,CategoryModel)

})

router.get('/getImage',(req,res)=>{

	image.send(req,res,images)

})

module.exports =router