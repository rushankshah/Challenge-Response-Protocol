const express = require('express')
const logger = require('./middleware/logger')
var bodyParser = require('body-parser')
var decrypt = require('./decrypt')

const PORT = process.env.PORT || 2000

const app = express()

var OPTs = []

app.use(logger)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/generateotp', (req, res) => {
    const otp = Math.round((Math.random() * 1000) + 1000)
    OPTs.push(otp)
    console.log(OPTs)
    res.send({
        'otp': otp.toString()
    })
})

app.post('/verifyotp', (req, res) => {
    const otp = req.body['otp']
    if (OPTs.includes(otp)) {
        console.log('OTP found')
        var newOTPs = []
        OPTs.forEach((value, index) => {
            if (value !== otp)
                newOTPs.push(value)
        })
        OPTs = newOTPs;
        var cipherText = req.body['challenge']
        plainText = decrypt(cipherText, 2)
        res.send({
            'otpStatus': 'success',
            'plainText': plainText
        })
    }
    else {
        res.send({
            'otpStatus': 'failed'
        })
    }
})

app.listen(PORT, () => {
    console.log('Server is up and running on port ' + PORT)
})

