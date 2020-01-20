const AWS_CREDENTIALS = require('./src/credentials.js');

let AWS = require('aws-sdk');

AWS.config.update({
    region: AWS_CREDENTIALS.REGION,
    accessKeyId: AWS_CREDENTIALS.ACCESS_KEY_ID,
    secretAccessKey: AWS_CREDENTIALS.SECRET_ACCESS_KEY
});

let args = process.argv;
let message = {};
if(args[2] == 'notif1') {
    message = {
        id: '1',
        type: 1,
        title: 'PENDING UPDATE',
        message: 'Application will be updated to the latest version on 21:00pm.'
    }
}

if(args[2] == 'notif2') {
     message = {
        id: '2',
        type: 1,
        title: 'PLEASE RANK US IN GOOGLE PLAY!',
        message: 'Hi dear user! We are in google play rank. Please leave your comment!'
    }
}

if(args[2] == 'notif3') {
    message = {
            id: '3',
            type: 1,
            title: 'INCOMING MESSAGE',
            message: 'You have 1 message/s left from user TestUser'
    }
}

if(args[2] == 'new1') {
    message = {
        id: 1,
        type: 2,
        title: 'FLASH NEWS: 30% DISCOUNT IN TECHNOLOGY',
        message: 'TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 '
    }
}

if(args[2] == 'new2') {
    message = {
        id: 2,
        type: 2,
        title: 'WHAT YOU KNOW ABOUT TECHNOLOGY ?',
        message: 'TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2'
    }
}

if(args[2] == 'new3') {
    message = {
        id: 3,
        type: 2,
        title: 'QA AUTOMATION ARTICLE',
        message: 'TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3'
    }
}

let params = {
  Message: JSON.stringify(message),
  TopicArn: AWS_CREDENTIALS.TOPIC_ARN
};

let publishTextPromise = new AWS.SNS().publish(params).promise();

publishTextPromise.then(
  function(data) {
    console.log("Message" + params.Message + "send sent to the topic" + params.TopicArn);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });