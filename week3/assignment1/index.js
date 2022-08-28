const express = require('express') //用require去取得express module
const router = express()  //returns express function

//要.js與.pug連結，千萬別忘了這個
router.set('view engine', 'pug')

// const getDataRoutes = require('./routes/getData')
// router.use('/getData', getDataRoutes)



router.get('/', (req, res) => {
  res.render('layout')
})



router.listen(3000)