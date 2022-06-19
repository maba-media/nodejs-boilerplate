require('dotenv').config({ path: '../config.env' })
require('module-alias/register')

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }))
}

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`🚀 Servidor iniciado na porta ${port}`)
})
