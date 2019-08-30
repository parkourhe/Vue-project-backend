const express = require('express')

const index = require('./index')

const Imglist = require('./Imglist')

const router = express.Router()

const mongoose = require('mongoose')

const comment = require('./comment')

const PostComment = require('./commentsPost')

const url = require('url')

var commentList = require('../models/commentList.js')

var newlist = require('../models/newlist.js')

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

module.exports =router