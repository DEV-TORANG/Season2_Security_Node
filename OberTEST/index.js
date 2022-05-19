const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const router = require('./router/index')
var session = require('express-session')

app.use(router)