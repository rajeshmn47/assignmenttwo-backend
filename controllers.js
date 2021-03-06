const User=require('./model')
const bodyParser = require('body-parser')
var express = require('express')
const router = express.Router()
const {Namerr} = require('namerr');




router.get("/getallusers",async function(req, res){
    console.log(req.query.page)
    const page=req.query.page?req.query.page:1
    const users=await User.find()
    res.status(200).json({
      'users': users.slice((page-1)*5,page*5),'pagecount':users.length,'rajesh':'mn'
    })
  })

  router.get("/createusers",async function(req, res){
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
      'users': 'useddr'
    })
  })

  router.post("/edituser",async function(req, res){
    console.log(req.body,'rajesh')
const user=await User.findById(req.body.id)
user.email=req.body.email
await user.save()
    res.status(200).json({
      'users': 'user',
      'id':req.body
    })
  })
  
  router.get("/edituser/:id",async function(req, res){
    console.log(req.params.id)
    const user=await User.findById(req.params.id)
    res.status(200).json({
      'users':user,
      'id':req.params.id
    })
  })

  router.get('/getonequestion/:id',async (req, res, next) => {
console.log(req.params.d)
    res.status(200).json({
      success: true,
      'id':req.params.id
  })
  })

  module.exports = router;