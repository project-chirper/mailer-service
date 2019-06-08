const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  host: process.env.SERVER,
  port: 465,
  secure: true,
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD
  }
})

module.exports = async ({ to, subject, text, html }) => {
  return await transporter.sendMail({ from: 'Bitter <bitter@matthewlang.tech>', to, subject, text, html })
}