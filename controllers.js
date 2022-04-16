const User=require('./model')
const bodyParser = require('body-parser')
var express = require('express')
const router = express.Router()
const {Namerr} = require('namerr');




router.get("/getallusers",async function(req, res,next){
    console.log(req.query.page)
    const page=req.query.page?req.query.page:1
    const users=await User.find()
    res.status(200).json({
      'users': users.slice((page-1)*5,page*5),'pagecount':users.length
    })
  })

  router.get("/createusers",async function(req, res,next){
    for(i=0;i<5;i++){
        const firstName =Namerr.name()
        const email=firstName.split(' ').join('')+'@email.com'
      const user=User({
          name:`${firstName}`,
          email:`${email}`,
      })
        await user.save()
    }
    res.status(200).json({
      'users': 'user'
    })
  })

  router.post("/edituser/:id",async function(req, res,next){
    console.log(req.params.id)
 const user=await User.findById(req.params.id)       
 user.email=req.body.email
 await user.save()
 console.log(user)
    res.status(200).json({
      'users': 'user'
    })
  })

  module.exports = router;