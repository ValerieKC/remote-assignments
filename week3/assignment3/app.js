const express = require('express') //用require去取得express module
const app = express()  //returns express function
// const bodyParser = require('body-parser')
const port = 3000


app.set('view engine', 'pug')

app.use(express.static('public'))
// app.use(bodyParser.urlencoded({ extended: true }));


function sum(number){
  num = parseInt(number, 10)
  const result = (1 + num) * num / 2
  return result
}

app.get('/', (req, res) => {
  res.render('layout')
})

//test 動態路由(params)
app.get('/hello/:name',(req,res)=>{
  console.log(req.params)
  res.send(`<h1>Hello, ${req.params.name}</h1>`)
})

app.get('/getData', (req, res) => {

  const number = req.query.number
  if (typeof number === "undefined") {
    res.render("sum", { ans:"Lack of Parameter"})
  } else if (!parseInt(number, 10) || parseInt(number, 10)<0){
    res.render("sum", { ans: "Wrong Parameter" })
  }else{
    const result = sum(number)
    res.render("sum", { ans: result })
  }
}  )

app.post('/getData',(req,res)=>{
  const number = req.query.number
  if (typeof number === "undefined") {
    res.render("sum", { ans: "Lack of Parameter" })
  } else if (!parseInt(number, 10) || parseInt(number, 10) < 0) {
    res.render("sum", { ans: "Wrong Parameter" })
  } else {
    const result = sum(number)
    res.render("sum", { ans: result })
  }
}
)



app.listen(port,()=>{
  console.log(`Express is running on http://localhost:${port}`)
})