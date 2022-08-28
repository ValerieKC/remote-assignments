const express = require('express') //用require去取得express module
const router = express()  //returns express function

router.set('view engine', 'pug')

function sum(number){
  num = parseInt(number, 10)
  const result = (1 + num) * num / 2
  return result
}

router.get('/', (req, res) => {
  res.render('layout')
})

router.get('/getData', (req, res) => {
  const number = req.query.number
  if (typeof number === "undefined") {
    res.send("Lack of Parameter")
  } else if (!parseInt(number, 10)){
    res.send("Wrong Parameter")
  }else{
    const result = sum(number)
    res.send(`${result}`)
  }
}  )

router.listen(3000)