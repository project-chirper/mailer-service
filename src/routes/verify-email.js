const sendMail = require('../common/sendMail')

/**
 * @desc Sends an email verification link to user
 * @param { email, username, uniqueCode }
 */
module.exports = async (req, res) => {
  if (!req.body.email || !req.body.username || !req.body.uniqueCode) return res.sendStatus(404)

  let verifyLink = `${process.env.FRONTEND}/verify-email/${req.body.uniqueCode}`

  await sendMail({
    to: req.body.email,
    subject: 'Email Verification',
    text: `Hey there ${req.body.username}! Thanks for registering an account with Bitter. Please click the following link to verify your account: ${ verifyLink }`
  })

  res.sendStatus(200)
}