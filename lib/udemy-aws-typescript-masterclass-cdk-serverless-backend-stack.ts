import {Duration, Stack, StackProps} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Bucket} from "aws-cdk-lib/aws-s3";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class UdemyAwsTypescriptMasterclassCdkServerlessBackendStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    new Bucket(this, 'someBucket', {
      lifecycleRules: [
        {
          expiration: Duration.days(5),
        }
      ]
    });
  }
}
