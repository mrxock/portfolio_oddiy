const express = require('express');
const app = express()
const ejs = require('ejs');
const path = require('path')
const fileUpload = require('express-fileupload')
const router = require('./routes')
const PORT = process.env.PORT || 7777


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.use(express.urlencoded({extended:true}))
app.use(router)
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/*', (_,res)=> res.sendStatus(404))


app.listen(PORT, console.log(PORT))