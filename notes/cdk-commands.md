# One time

## Configure the project
```
cdk init app --language typescript
```

## Bootstrap the project into AWS

```
cdk bootstrap
```

Permissions required (Full access or admin):

* APIGateway
* AWS SSM
* CloudFormation
* Cognito
* DynamoDB
* ECR
* IAM - _This is terrifying_
* Lamda
* S3

# Regularly

Generate a CloudFormation Stack json file used in deployment
```
cdk synth
```