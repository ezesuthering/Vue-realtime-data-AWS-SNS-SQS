const AWS_CREDENTIALS = require('./src/credentials.js');

let AWS = require('aws-sdk');

AWS.config.update({
    region: AWS_CREDENTIALS.REGION,
    accessKeyId: AWS_CREDENTIALS.ACCESS_KEY_ID,
    secretAccessKey: AWS_CREDENTIALS.SECRET_ACCESS_KEY
});

let type = process.argv[2];
let message = {};

switch (type) {
    case 'notif1':
        message = {
            id: '1',
            type: 1,
            title: 'PENDING UPDATE',
            message: 'Application will be updated to the latest version on 21:00pm.'
        }
      break;
    case 'notif2':
        message = {
            id: '2',
            type: 1,
            title: 'PLEASE RANK US IN GOOGLE PLAY!',
            message: 'Hi dear user! We are in google play rank. Please leave your comment!'
        }
      break;
    case 'notif3':
        message = {
            id: '3',
            type: 1,
            title: 'INCOMING MESSAGE',
            message: 'You have 1 message/s left from user TestUser'
    }
      break;
    case 'new1':
        message = {
            id: 1,
            type: 2,
            title: 'FLASH NEWS: 30% DISCOUNT IN TECHNOLOGY',
            message: 'TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 TEXT NEW 1 '
        }
      break;
    case 'new2':
        message = {
            id: 2,
            type: 2,
            title: 'WHAT YOU KNOW ABOUT TECHNOLOGY ?',
            message: 'TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2 TEXT NEW 2'
        }
      break;   
    case 'new3':
        message = {
            id: 3,
            type: 2,
            title: 'QA AUTOMATION ARTICLE',
            message: 'TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3 TEXT NEW 3'
        }
       break;  
    default:
        message = {}
        break; 
  }

let params = {
  Message: JSON.stringify(message),
  TopicArn: AWS_CREDENTIALS.TOPIC_ARN
};

let publishTextPromise = new AWS.SNS().publish(params).promise();

publishTextPromise.then(
  () => {
    console.log("Message".concat(params.Message).concat("send sent to the topic").concat(params.TopicArn));
  }).catch(
    (err) => {
    console.error(err, err.stack);
  });