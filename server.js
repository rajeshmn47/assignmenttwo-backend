const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const User=require('./model')
const userscontroller = require('./controllers')
const {Namerr} = require('namerr');





const ATLAS_URI ='mongodb+srv://rajeshmn47:uni1ver%40se@cluster0.bpxam.mongodb.net/assignment?retryWrites=true&w=majority'
const url = 'http://localhost:3000'
app.use(cors({ origin: url, credentials: true }))
app.use('/user/',userscontroller)
mongoose.Promise = global.Promise
mongoose.connect(
    ATLAS_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error) {
    if (error) {
      console.log('Error!' + error)
    }
  }
)
app.get("/",async(req,res)=>{
    res.send("API running")
})

app.get("/pushcategories",async(req,res)=>{
    res.send("API running")
})
app.get('/createproduct',async(req,res)=>{
  res.send("API running")
})
app.get('/findout',async(req,res)=>{
    res.send("API running")
})

app.listen(9000,()=>{
    const firstName =Namerr.name()
    const email=firstName.split(' ').join('')+'@email.com'
    console.log('App is running on port 9000',firstName,email)})