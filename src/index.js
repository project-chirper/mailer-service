const express = require('express'),
      os = require('os'),
      bodyParser = require('body-parser')

const app = express()

// Middlewares
app.use(bodyParser.json())

// Routes
app.use('/mailer', require('./routes'))

// Error handling
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    service: 'mailer-service',
    host: os.hostname(),
    message: err.message,
    info: "Beep Boop! It seems I have been a dump computer. Pssst, blame Matt! SysAdmin has been notified of this error."
  })
})

// Start
app.listen(process.env.PORT, () => console.log(`Listening on port ${ process.env.PORT } (${os.hostname()})`))