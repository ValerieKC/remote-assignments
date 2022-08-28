const express = require('express') 
const router = express()
const bodyParser = require('body-parser')
const path = require('path')

router.set('view engine', 'pug')

router.use('/static', express.static('public'))
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }));

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


router.use('/sum.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'sum.html'))
})

router.post('/getData', (req, res) => {
  res.json(sum(req.body.number))
})


router.listen(3000)