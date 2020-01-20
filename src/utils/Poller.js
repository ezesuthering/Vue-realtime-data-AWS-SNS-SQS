import { Consumer } from 'sqs-consumer'
import AWS from 'aws-sdk';
import store from '../store/index';

export default class Poller {
    app = null;
    queueUrl = '';

    constructor(credentials){
        this.update(credentials);        
    }

    update = (credentials) => {
        try {
        AWS.config.update({
            region: credentials.REGION,
            accessKeyId: credentials.ACCESS_KEY_ID,
            secretAccessKey: credentials.SECRET_ACCESS_KEY
        });
        this.queueUrl = credentials.QUEUE_URL;
        } catch(e) {
            throw "Error while updating the AWS Config.. details: ".concat(e);
        }
    }

    create = () => {
        try {
            this.app = Consumer.create({
                queueUrl: this.queueUrl,
                handleMessage: async (message) => {
                if(message.Body) {
                    if(JSON.parse(message.Body).type == 1) {
                    store.dispatch('setNotification', JSON.parse(message.Body))
                    }
        
                    if(JSON.parse(message.Body).type == 2) {
                    store.dispatch('setNew', JSON.parse(message.Body))
                    }
                }
                },
                sqs: new AWS.SQS()
             });
            console.log('SQS Poller Ready..')
        } catch(e) {
            throw "Error while creating the SQS Poller.. details: ".concat(e);
        }
    }

    start = () => {
        try {
            this.app.on('error', (err) => {
                console.log(err)
            });
            
            this.app.on('processing_error', (err) => {
                console.log(err)
            });
                    
            this.app.on('timeout_error', (err) => {
                console.log(err)
            });
            
            this.app.start();
        } catch(e) {
            throw "Error while starting the SQS Poller.. details: ".concat(e);
        }
    }

}
