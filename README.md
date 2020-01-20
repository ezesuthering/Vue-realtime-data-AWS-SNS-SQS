# Code Challenge

Must exists an AWS Account with one topic configured on SNS service. Its mandatory to be subscribed to this topic with a SQS (Standar not FIFO).

## Run app locally
```
npm run serve
```

### Publish notifications
```
There are 3 types of notifications
On root directory:
1) node publish.js notif1
2) node publish.js notif2
3) node publish.js notif3
```

### Publish news
```
There are 3 types of notifications
On root directory:
1) node publish.js new1
2) node publish.js new2
3) node publish.js new3
```

### Crendentials file
src/credential.js

Must be set:

module.exports = {
    ACCESS_KEY_ID: The Access Key ID of the IAM user provided by AWS,
    SECRET_ACCESS_KEY: The Secret Access Key of the IAM user provided by AWS,
    REGION: The region of the account services E.G: 'sa-east-1',
    QUEUE_URL: The SQS Queue URL,
    TOPIC_ARN: The Topic ARN
} 
