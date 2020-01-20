# Code Challenge

Vue Js application using Vuex, Vue Router, Vuetify, PWA Support, SQS-Consumer and AWS-SDK. It provides realtime data in the UI without refreshing the browser. The data is a message that its published by the SNS (Simple Notification Service) to a SQS (Simple Queue Service). The Client its long polling the queue so its notified when a new message its available. And when it is the message is processed by the application in realtime.

Must exists an AWS Account with one topic configured on SNS service. Its mandatory to be subscribed to this topic with a SQS (Standard not FIFO).

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
```
src/credential.js
```
Must be set:

```
ACCESS_KEY_ID: The Access Key ID of the IAM user provided by AWS
SECRET_ACCESS_KEY: The Secret Access Key of the IAM user provided by AWS
REGION: The region of the account services E.G: 'sa-east-1'
QUEUE_URL: The SQS Queue URL
TOPIC_ARN: The Topic ARN
```
