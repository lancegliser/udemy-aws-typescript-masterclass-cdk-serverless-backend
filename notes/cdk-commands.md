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

This creates a `Stack` in your account named `CDKToolkit` which creates permissions,
roles, etc required by the actual deployment of your project's `Stack`.

# Regularly

Optional: Generate a CloudFormation Stack json file used in deployment

```
cdk synth
```

Actual:

```
cdk deploy
```

If you have multiple:
```
cdk deploy --all
```

# Clean up

```
cdk destroy
```