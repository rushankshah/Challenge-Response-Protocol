var request = require('request')

const verifyotp = () => {
    const otpValue = ({
        'otp': 1754,
        'challenge': 'abcd'
    })
    var clientServerOptions = {
        uri: 'http://localhost:2000/verifyotp',
        body: JSON.stringify(otpValue),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    request(clientServerOptions, function (error, response) {
        console.log(error, response.body);
        return;
    });
}

const generateOTP = () => {
    var clientServerOptions = {
        uri: 'http://localhost:2000/generateotp',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    request(clientServerOptions, function (error, response) {
        console.log(error, response.body);
        return;
    });
}

verifyotp()

