require('module-alias/register')

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const workRoutes = require('@routes/work')

require('dotenv').config()

const app = express()

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('🤖 Conectado ao MongoDB'))

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }))
}

app.use('/api', workRoutes)

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`🚀 Servidor iniciado na porta ${port}`)
})
