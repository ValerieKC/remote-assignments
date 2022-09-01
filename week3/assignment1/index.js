<<<<<<< HEAD
const express = require('express') //用require去取得express module
const router = express()  //returns express function

//要.js與.pug連結，千萬別忘了這個
router.set('view engine', 'pug')

// const getDataRoutes = require('./routes/getData')
// router.use('/getData', getDataRoutes)



router.get('/', (req, res) => {
  res.render('layout')
})



=======
const express = require('express') //用require去取得express module
const router = express()  //returns express function

//要.js與.pug連結，千萬別忘了這個
router.set('view engine', 'pug')

// const getDataRoutes = require('./routes/getData')
// router.use('/getData', getDataRoutes)



router.get('/', (req, res) => {
  res.render('layout')
})



>>>>>>> 19da42995f31f7493f108f48ca58e14c58e918a6
router.listen(3000)