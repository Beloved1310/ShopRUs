const express = require('express')
const sequelize = require('../database/Sequelize')
require('dotenv').config()
const { PORT } = require('../config')

const app = express()
sequelize.sync().then(()=>{
  console.log('Database is ready')
})

const customer = require('../routes/customer')
const discount = require('../routes/discount')
const invoice = require('../routes/invoice')


process.on('unhandledRejection', (err) => {
  debug(err, 'Unhandled Rejection at Promise')
  process.exit(1)
})
process.on('uncaughtException', (err) => {
  debug(err, 'Uncaught Exception thrown')
  process.exit(1)
})



app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '50mb' }))

app.use('/', customer)
app.use('/discount', discount)
app.use('/invoice', invoice)


app.listen(PORT, () => {
  console.log(`Web server is running ${PORT}`)
})

module.exports = app;