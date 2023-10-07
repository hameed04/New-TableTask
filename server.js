var express = require('express')
var server = express();
var routes = require('./routes/userRoutes')
var mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');

server.use(bodyParser.json())
server.use(express.json())

server.use(cors())
mongoose.connect("mongodb://localhost:27017/est", { useNewUrlParser: true, useUnifiedTopology: true },).then(() => console.log("db connected"))
  .catch((error) => { console.log(error); })



server.use("user", require("./routes/userRoutes"))

server.get('/tableData',(req,res)=>{
  var data = [
    {Id:101,Name: "Hameed",Email:"hameed@gmail.com",Age:"26",DateofBirth:"18 July 1997"},
    {Id:102,Name: "Rohith",Email:"hameed@gmail.com",Age:"26",DateofBirth:"18 July 1997"},
    {Id:103,Name: "Hameed",Email:"hameed@gmail.com",Age:"26",DateofBirth:"18 July 1997"},
    {id:104,Name: "Hameed",Email:"hameed@gmail.com",Age:"26",DateofBirth:"18 July 1997"}
  ]
  console.log(data)
  res.json(data)
})
server.post('/form',(req,res)=>{
  console.log("req",req.body)
  console.log("res",res.params)
  res.send()

},(error)=>{
  console.log('post data error',error)
})
server.listen(9000, () => {
console.log("started")
})
